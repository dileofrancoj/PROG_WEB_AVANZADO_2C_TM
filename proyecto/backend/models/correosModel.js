const nodemailer = require('nodemailer');
const pool = require('../bd.js');

async function getAdminEmail(id) {
    try {
        let query = "select id_cliente , mail_cliente, password_mail_cliente, nombre_cliente from clientes where estado_cliente = 1 and id_cliente = ?";
        const rows = await pool.query(query,[id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function sendGenericEmail(obj) {
    try {
        let get_email_config = await getAdminEmail(obj.id_cliente_usuario);

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: get_email_config[0].mail_cliente, // generated ethereal user
                pass: get_email_config[0].password_mail_cliente // generated ethereal password
            },
            tls : {
                rejectUnauthorized : false
            }
        });
        console.log(transporter)
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: get_email_config[0].mail_cliente, // sender address
            to: obj.mail_usuario, // list of receivers
            subject: 'Registro exitoso', // Subject line
            text: 'Hola, gracias por registrarte...' // plain text body
        });
    
        console.log(info.messageId);
        return info.messageId;
    } catch (error) {
        throw error; 
    }

}

module.exports = {sendGenericEmail} 