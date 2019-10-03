// var
// chrome://inspect/#devices

const express = require('express');
const router = express.Router(); 
const productosModel = require('../models/productosModel');

router.get('/precio/', async (req,res,next)=> {
    // module.exports = {
    //     getProductos,
    //     getProducto,
    //     getProductosPrecio
    // }
    try {

        let min = req.query.min; 
        let max = req.query.max; 
        let productos_ok = await productosModel.getProductosPrecio(min,max);
        // if productos_ok.length > 0
        res.json({status : 'ok', data : productos_ok});
    } catch(err) {
        console.log(err);
        res.status(500).json({status : 'error'})
    }

})

// localhost:3000/productos/1
router.get('/:id_p', async(req,res,next)=> {

    try {
        // req

        // params
            // {id_p : 1}
        let id_p = parseInt(req.params.id_p);
        if(Number.isInteger(id_p)) {
            let producto = await productosModel.getProducto(id_p);
            console.log(producto)
            if(producto.length > 0) {
                res.json({status : 'ok', data : producto, cantidad : producto.length});
                
            } else {    
                res.json({status : 'ok', cantidad : 0})
            }
        } else {

            res.json({status : 'invalid'});
        }

    } catch(error) {
        console.log(error)
        res.status(500).json({status : 'error', error: error})
    }
})


router.get('/', async (req,res,next)=> {
    try {
        console.log(req.headers.authorization);
        let productos =  await productosModel.getProductos();
        console.log(productos); // <Promise> Pending
        res.json({productos});
        // vista del home con TODOS los productos
    } catch(error) {
        res.json({status : 'error'});
    }

})




     
module.exports = router; 