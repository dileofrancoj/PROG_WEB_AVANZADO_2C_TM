const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);

async function getProductos() {
    // Se realiza una consulta de todos los productos de la tabla
    // el bloque try catch es propio en node de funciones asincronas
    try {
        const rows = await query("SELECT * from productos");
        return rows;

    }
    catch(err){
        // bloque en caso que exista algun error 
        console.log(err);
    }

}

async function getProducto(id) {
    try {
        const rows = await query("select * from productos where id_p= ?",[id]);
        return rows;
        
        // INSERT INTO productos (nombre,precio, descripcion) values ()
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getProductos,
    getProducto
}
