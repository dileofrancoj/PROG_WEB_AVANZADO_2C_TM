const mysql = require('../bd'); // require de la referencia de la conexion;
const utils = require('util'); // utils hace referencia al modulo instalado
const query = utils.promisify(mysql.query).bind(mysql);

// El controller se comunica con la function getProductosPrecio

async function insertProducto(obj) {
    try {
        // {stock_p : "palabra"}
        const rows = await query ("insert into producto set ?",obj);
        // undefined insertId es una propiedad que nos devuelve el primary A_I con el que se inserto el ultimo producto de esta peticion. 

        return rows.insertId;
    } catch(err) {
        console.log("Entro al catch del model")
        throw err;
        // console.log(err);
    }
}

async function getProductosPrecio(min,max) {
    try{
        // SQLinjection 
        // mysql_real_scape_string($variable) 
        const rows = await query("select * from productos where precio_p >= ? and precio_p <= ?",[min,max]);
        return rows; // return rows ? esta información llega al controller json | vista
    } catch(err) {
        console.log(err);
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
    getProducto,
    getProductosPrecio,
    insertProducto
}


