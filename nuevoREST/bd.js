const mysql = require('mysql');
const util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.query = util.promisify(pool.query)

module.exports = pool;