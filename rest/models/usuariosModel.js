const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);


async function getUser(user, password) {
    try {
        const rows = await query("select id_u, nombre_u, cuenta_confirmada from usuarios where mail_u = ? and password_u = ? ",[user,password]);

        return rows; 
    } catch(error){
        throw error; 
    }
}


async function insertUser(obj) {
    try {
        // await query..... insert
        const rows = await query ("insert into usuarios set ?",obj);
        return rows.insertId; 

    } catch(error) {
        throw error;
        // aparece el error y además le comunica el error al controller
    }
}
module.exports = {insertUser, getUser}