const pool = require('../bd');

async function getEvents(cliente) {
    try {
        let query = "select * from ?? where id_cliente_producto = ?";
        const rows = await pool.query(query,[process.env.TABLA_CLIENTES]);
        return rows; 
    } catch (error) {
        throw error;
    }
}

async function insertEvent(obj) {
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query,[process.env.TABLA_EVENTOS, obj]);
        return rows.insertId;
    } catch(error) {
        throw error;
    }
}