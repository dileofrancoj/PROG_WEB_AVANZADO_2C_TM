const pool = require('../bd');

async function getProductos(cliente) {
    try {
        let query = "select * from ?? where id_cliente_producto = ?";
        const rows = await pool.query(query,[process.env.TABLA_PRODUCTOS,cliente]);
        return rows; 
    } catch (error) {
        throw error;
    }
}
async function getProducto(cliente, id) {
    try {
        let query = "select * from ?? where id_cliente_producto = ? and id_producto = ?";
        const rows = await pool.query(query,[process.env.TABLA_PRODUCTOS,cliente,id]);
        return rows; 
    } catch (error) {
        throw error;
    }
}

async function insertProducto(obj) {
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query,[process.env.TABLA_PRODUCTOS, obj]);
        return rows.insertId;
    } catch(error) {
        throw error;
    }
}

async function insertProductoPrecio(obj) {
    try {
        let query ="insert into precio set ?";
        const rows = await pool.query(query,[obj]);
        return rows.insertId; 
    } catch (error) {
        throw error; 

    }
}

async function deleteProducto(id_producto, id_cliente) {
    try {
        let query = "delete from ?? where id_producto_precio = ?  ";
        let query2 = "delete from ?? where id_producto = ?";
        const rows0 = await pool.query(query,[process.env.TABLA_PRECIOS,id_producto]);
        const rows = await pool.query(query2,[process.env.TABLA_PRODUCTOS,id_producto, id_cliente]);
        return rows; 
    } catch (error) {
        throw error; 

    }
}

async function updateProducto(id,obj) {
    try {

        let query = "update ?? set ? where id_producto = ? and ";
        const rows = await pool.query(query,[process.env.TABLA_PRODUCTOS,obj,id]);
        return rows; 
    } catch (error) {
        throw error; 
    }
}
module.exports = {getProductos, insertProducto, getProducto, insertProductoPrecio,updateProducto, deleteProducto}