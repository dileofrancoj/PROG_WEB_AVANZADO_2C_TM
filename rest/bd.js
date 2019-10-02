
const mysql = require('mysql'); // mysql hace referencia al modulo instalado

const pool = mysql.createPool({
    host : process.env.DATABASE_HOST,
    port : 3306,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    connectionLimit : 10
});
// connectionLimit : definimos la cantidad maxima de conexiones simultaneas que tendrá mysql , las demas quedan pendientes (cola)

pool.getConnection((error, connection)=> {
    if(error) { console.log("Error en la conexion" ,error);}
    else { return connection;  }
});

module.exports = pool;