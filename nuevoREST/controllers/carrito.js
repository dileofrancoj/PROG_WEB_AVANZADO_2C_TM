const express = require('express');
const router = express.Router();
const carritoModel = require('../models/carritoModel');

router.get('/:id_cliente', async(req,res,next)=> {
    try {
        if(req.id && req.role) {
            let carrito = await carritoModel.getCarrito(req.params.id_cliente,req.id);
            // console.log(carrito);
            res.json({status : 'ok', data : carrito});

        }
    } catch(error) {

        res.status(500).json({status : "error"});
    }
})

router.delete('/:id_cliente/:id_carrito', async(req,res,next)=> {
    try {
        if(req.id && req.role) {
            let carrito = await carritoModel.deleteCarrito(req.params.id_cliente,req.id, req.params.id_carrito);
            res.json({status : 'ok', data : carrito});

        }
    } catch(error) {
        // console.log(error);
        res.status(500).json({status : "error"});
    }
})


router.post('/', async(req,res,next)=> {
    try {
        if(req.id && req.role) {
            let obj = {
                id_usuario_carrito : req.id,
                id_producto_carrito : req.body.id_producto,
                id_cliente_carrito : req.body.id_cliente
            }
            let insert_carrito = await carritoModel.insertCarrito(obj);
            res.json({status : 'ok', data : insert_carrito})

        }
    } catch (error) {
        // console.log(error);
        res.status(500).json({status : 'error'})
    }
})


module.exports = router; 