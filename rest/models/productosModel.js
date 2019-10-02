const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);


async function updateProducto(obj,id) {
    try {
        const rows = await query("update productos set ? where id_p = ?",[obj,id]);
        return rows;
    } catch(err) {
        throw err;
    }
}

async function insertProducto(obj) {
    try {
        const rows = await query("insert into productos set ?",[obj]);
        return rows.insertId;
    } catch(err) {
        console.log("error al insertar");
        throw err;
    }
}

async function getProductos() {
    // Se realiza una consulta de todos los productos de la tabla
    // el bloque try catch es propio en node de funciones asincronas
    try {
        const rows = await query("SELECT * from productos");
        return rows;

    }
    catch(err){
        throw err;
    }

}

async function getProducto(id) {
    try {
        const rows = await query("select * from productos where id_p= ?",[id]);
        return rows;
        
    } catch(err) {
        console.log(err);
        throw err;
    }
}

async function deleteProducto(id) {
    try {
        const rows = await query("delete from productos where id_p = ?",id);
        return rows;
    } catch(err) {
        throw err;
    }
}

module.exports = {
    getProductos,
    getProducto,
    insertProducto,
    updateProducto,
    deleteProducto
}
