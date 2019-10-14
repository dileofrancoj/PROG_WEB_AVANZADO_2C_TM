const pool = require('../bd');

async function getCarrito(idCliente,idUsuario) {
    try{

        let query ="SELECT * from ?? join ?? on id_producto =  id_producto_carrito where id_usuario_carrito = ? and id_compra_carrito IS NULL";
        const rows = await pool.query(query,[process.env.TABLA_CARRITO, process.env.TABLA_PRODUCTOS,idUsuario]);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function insertCarrito(obj) {
    try{
        let query = "INSERT INTO ?? set ?";
        
        const rows = await pool.query(query,[process.env.TABLA_CARRITO,obj]);
        return rows.insertId;
    } catch(error) {
        throw error;
    }
}

module.exports = {getCarrito,insertCarrito}