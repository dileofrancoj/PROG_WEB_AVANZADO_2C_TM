const pool = require('../bd');


async function getContenidos(idCliente) {
    try {
        let query = "select id_contenido, precio_contenido, link_contenido, titulo_contenido, descripcion_contenido, multimedia_contenido, fecha_contenido, ubicacion_contenido from ?? where id_cliente_contenido = ? and estado_contenido = 1 order by id_contenido desc";

        const rows = await pool.query(query,[process.env.TABLA_CONTENIDO,idCliente]);
        // console.log(rows);
        return rows; 
    } catch(error) {
        // console.log(error);
        throw error;
    }
}

async function getContenido(idCliente,idContenido) {
    try {
        
        let query = "select id_contenido, precio_contenido,link_contenido,titulo_contenido, descripcion_contenido, multimedia_contenido, fecha_contenido from ?? where id_cliente_contenido = ? and id_contenido = ? and estado_contenido = 1";

        const rows = await pool.query(query,[process.env.TABLA_CONTENIDO,idCliente, idContenido]);
        return rows; 
    } catch(error) {
        throw error;   
    }
}

async function insertContenido(obj) {
    try {
        // console.log(obj);
        let query = "insert into contenido set ?";
        const rows = await pool.query(query,[obj]);
        return rows.insertId;
    } catch(error) {
        throw error;
    }
}

async function updateContenido(obj,idContenido,idCliente) {
    try {
        let query = "update ?? set ? where id_contenido = ? and id_cliente_contenido =?";
        const rows = await pool.query(query,[process.env.TABLA_CONTENIDO,obj,idContenido,idCliente]);
        return rows;
    } catch(error) {
        throw error; 
    }
}

async function deleteContenido(id) {
    try {
        let query = "delete from ?? where id_contenido = ?";
        const rows = await pool.query(query,[process.env.TABLA_CONTENIDO, id]);
        return rows; 
    } catch(error) {
        throw error;   
    }
}

module.exports = {getContenido, insertContenido, updateContenido, deleteContenido, getContenidos}