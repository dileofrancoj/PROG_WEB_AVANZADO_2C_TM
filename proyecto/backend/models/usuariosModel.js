const pool = require('../bd');
const md5 = require('md5');

async function getUsuario(id) {
    try {
        let query = "select nombre_usuario, apellido_usuario, telefono_usuario, mail_usuario from ?? where id_usuario = ?";
        const rows = await pool.query(query,[process.env.TABLA_USUARIOS,id]);
        return rows; 
    } catch (error) {
        throw error;
    }
}

async function putUsuarioDatos(nombre,apellido,telefono, id) {
    try {

        let query = "update usuarios set nombre_usuario = ?, apellido_usuario = ?, telefono_usuario = ? where id_usuario = ?";
        const rows = await pool.query(query,[nombre,apellido,telefono,id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function putUsuarioPassword(password, id) {
    try{ 

        let query = "update usuarios set password_usuario = ? where id_usuario = ?";
        const rows = await pool.query(query,[md5(password),id])
        return rows;
    } catch(error) {
        throw error;
    }
}

module.exports = {getUsuario, putUsuarioDatos,putUsuarioPassword}