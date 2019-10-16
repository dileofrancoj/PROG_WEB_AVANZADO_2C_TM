const pool = require('./../bd');
const uuid  = require('uuid');
const mp = require('./../mercadopago');

async function comprar(idUsuario) {
    try {
        let totalCarrito = 0;
        let uuid_t = uuid();
        let selectCarrito = "select id_producto_carrito, precio_producto from carrito join productos on id_producto_carrito = id_producto where id_compra_carrito is null and id_usuario_carrito = ?";
        const rowsCarrito = await pool.query(selectCarrito, idUsuario);
        for (let i = 0; i<rowsCarrito.length; i++) {
            totalCarrito = totalCarrito + rowsCarrito[i].precio_producto
        }
        let insertQuery = "insert into compra set ?";
        let obj = {
            id_usuario_compra : idUsuario,
            monto_compra : totalCarrito,
            token_compra : uuid_t
        }

        const insertCompra = await pool.query(insertQuery,obj);
        let updateQuery = "update carrito set id_compra_carrito = ? where id_compra_carrito is null and id_usuario_carrito = ?";
        const updateCarrito = await pool.query(updateQuery,[insertCompra.insertId,idUsuario]);

        let preference = {
            items : [
                {
                    id : insertCompra.insertId,
                    title : 'Compra Carrito',
                    quantity : 1,
                    currency_id : 'ARS',
                    unit_price : parseFloat(totalCarrito)
                }
            ],
            payer : {
                email : 'mailusuario@gmail.com'
            },
            notification_url : 'http://miurl.com/'+uuid_t
        }
        let dato_return = await mp.comprar(preference);
        console.log(dato_return);
        return dato_return.body.sandbox_init_point;
    } catch(error) {
        throw error;
    }
}

module.exports = {comprar}