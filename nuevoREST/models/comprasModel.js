
const uuid = require('uuid');
const pool = require('../bd');
const mp = require('../mercadopago');


async function deleteAllCarrito(idUsuario,idCliente) {
    try {
        let query ="delete from carrito where id_compra_carrito IS NULL and id_usuario_carrito = ? and id_cliente_carrito = ?";
        const rows = await pool.query(query,[idUsuario,idCliente]);
    } catch(error) {
        throw error;
    }
}

async function comprobarStockPreCompra(idUsuario, idCliente) {
    try {
    let query = "(select (stock_producto - (select count(id_producto_carrito) as cantidad from carrito where id_producto_carrito in(SELECT id_producto_carrito FROM carrito where id_usuario_carrito = ?) and id_compra_carrito IS NULL)) as cantidad from productos where id_producto in(SELECT id_producto_carrito FROM carrito where id_usuario_carrito = ? and id_compra_carrito IS NULL and id_cliente_carrito = ?))";

    const rows = await pool.query(query,[idUsuario,idUsuario, idCliente])
    return rows;        
} catch(error) {
    throw error;
}

}

async function comprar(idUsuario, idCliente, monto, id_direccion) {
    try {
        let stock_pre =await comprobarStockPreCompra(idUsuario, idCliente);
        // console.log(stock_pre)

        for(let i = 0; i< stock_pre.length; i++) {
  
            if(stock_pre[i].cantidad <= 0) {
                await deleteAllCarrito(idUsuario,idCliente);
                return "nostock";
            }
        }
        var totalCarrito = 0;
        let uuid_t = uuid();
        let queryCarrito = "select id_producto_carrito, precio_producto from carrito join productos on id_producto_carrito = id_producto where id_compra_carrito is null and id_usuario_carrito = ?";
        const rowsCarrito = await pool.query(queryCarrito,idUsuario);
        for(let i = 0; i < rowsCarrito.length; i++) {
            totalCarrito = totalCarrito + rowsCarrito[i].precio_producto
        }
        // se debe insertar dentro de la tabla compras : 
        // id_usuario_compra, monto_compra,token_compra
        let insertQuery = "INSERT INTO compra set ?"
        let obj = {
            id_usuario_compra : idUsuario,
            monto_compra : monto,
            token_compra : uuid_t,
            id_compra_d : id_direccion
        }
        const insertCompra = await pool.query(insertQuery,obj);
        if(insertCompra.insertId) {
            let updateQuery = "UPDATE carrito set id_compra_carrito = ? where id_compra_carrito is null and id_usuario_carrito = ?"
            const updateCarrito = await pool.query(updateQuery,[insertCompra.insertId,idUsuario]);
            if(updateCarrito) {
                let preference = {
                    items: [
                      {
                        id: insertCompra.insertId,
                        title: 'Compra en e-commerce',
                        quantity: 1,
                        currency_id: 'ARS',
                        unit_price: parseFloat(totalCarrito)
                      }
                    ],
                    payer: {
                      email: 'dileo.francoj@gmail.com'
                    },
                    external_reference : uuid_t, // referencia externa para que la agarre MP
                    notification_url : process.env.NOTIFICACION_COMPRA + uuid_t
                };
                let dato_return = await mp.comprar(preference)

                url_return = dato_return.body.init_point;
                let updateCompra = "update compra set url_compra = ? where id_compra = ? and id_usuario_compra = ?";
                await pool.query(updateCompra,[url_return,insertCompra.insertId,idUsuario]);
                return url_return;
            }
        }
    } catch(error){ 
        throw error;
    }
};

async function getComprasAdmin() {
    try {
        let query = "select * from compra join usuarios on id_usuario_compra = id_usuario";

        const rows = await pool.query(query);
        // console.log(rows);
        return rows;
    } catch(error){
        throw error;
    }
}

async function getComprasUsr(id){ 
    try {
        let query = "select estado_compra, id_compra, monto_compra, fecha_compra,url_compra from compra join usuarios on id_usuario_compra = id_usuario where id_usuario_compra = ?";

        const rows = await pool.query(query,[id]);
        return rows;
    } catch(error) {
        throw error;
    }
}

async function aprobarCompraAdmin(estado,id) {
    try {
        // console.log("estado :"+ estado);
        // console.log("id : "+id)
        let query = "update compra set estado_compra = ? where id_compra = ?";
        const rows = await pool.query(query,[estado,id]);
        return rows;
    } catch(error){
        throw error;
    }
}

async function getDatosCompra(id_cliente, id_compra) {
    try {
        let query ="select nombre_usuario, apellido_usuario, mail_usuario, telefono_usuario from usuarios where id_usuario = (select id_usuario_compra from compra where id_compra = ?) and id_cliente_usuario =?";
        const rows = await pool.query(query,[id_compra,id_cliente]);
        return rows;
    } catch(error){
        throw error;
    }
}

async function getDetalleCompra(id_cliente,id_usuario,id_compra) {
    try {
        let query = "select nombre_producto, precio_producto, foto_producto from carrito join productos on id_producto = id_producto_carrito where id_cliente_carrito = ? and id_compra_carrito in (select id_compra from compra where id_usuario_compra = ? and id_compra = ? )";

        const rows = await pool.query(query,[id_cliente,id_usuario,id_compra]);
        // console.log(rows);
        return rows;
    } catch(error) {
        throw error;
    }
}
module.exports = {comprar, getComprasAdmin, aprobarCompraAdmin, getDatosCompra,getComprasUsr, getDetalleCompra}