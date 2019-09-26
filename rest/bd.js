
// https://www.npmjs.com/package/mysql
const mysql = require('mysql'); // mysql hace referencia al modulo instalado

const pool = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'carrito',
    connectionLimit : 10
});
// connectionLimit : definimos la cantidad maxima de conexiones simultaneas que tendrá mysql , las demas quedan pendientes (cola)

pool.getConnection((error, connection)=> {
    if(error) { console.log("Error en la conexion" ,error);}
    else { return connection;  }
});

module.exports = pool;