const pool = require('../bd');
const correosModel = require('./correosModel');
const usuarioModel = require('./usuariosModel');
async function registrar(obj){
    try {
        let id_cliente = obj.id_cliente_usuario
        let exists = await usuarioModel.find(obj.id_cliente_usuario, obj.mail_usuario);
        // si ya existe el usuario
        if(exists) {
            return "existe";
        } else {
            // si no existe el usuario
            let query = "insert into ?? set ?";
            const rows = await pool.query(query,[process.env.TABLA_USUARIOS,obj]);
            const userData = await usuarioModel.findUserbyId(obj.id_cliente_usuario,rows.insertId);
            let codeMail = obj.codigo_mail_usuario;
            if(rows.insertId !=undefined) {
                let obj = {
                    id_cliente_usuario : id_cliente,
                    to : userData[0].mail_usuario,
                    subject : 'Gracias por registrarte',
                    html : 'Para continuar con tu registro, hace click <a href="'+process.env.NOTIFICACION_CORREO+''+codeMail+'">ACÁ</a>'
                }
                let id_correo = await correosModel.sendGenericEmail(obj);
                if(id_correo) {
                    return "enviado";
                } else {
                    return "noenviado"; 

                }
            } 

        }

    } catch (error) {
        throw error; 
    }
}

async function aprobarRegistro(uuid) {
    try {
        console.log("Lleg")
        let query = "update usuarios set cuenta_confirmada_usuario = ? where codigo_mail_usuario = ?";
        console.log(query);
        console.log(uuid)
        const rows =await pool.query(query,[1,uuid]);
        return rows;
    } catch(error) {
        throw error;
    }
} 

module.exports = {registrar, aprobarRegistro}