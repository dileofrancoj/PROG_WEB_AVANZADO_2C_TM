const pool = require('../bd.js');
// eventos tiene id : 0
async function getEventos(id) {
    try {
        let query = "select count(*) as cantidad from contenido where  id_tipo_contenido = 0 and id_cliente_contenido = ?";
        const rows = await pool.query(query,[id]);
        return rows;
    } catch(error) {
        throw error;
    }
}
async function getProductos(id){
    try {

        let query = "select count(*) as cantidadP from productos where id_cliente_producto = ?";
        const rows = await pool.query(query,[id]);
        return rows;
    } catch(error) {
        throw error;
    }
}
module.exports = {getEventos,getProductos};