// var
// chrome://inspect/#devices

const express = require('express');
const router = express.Router(); 
const productosModel = require('../models/productosModel');

router.get('/', async (req,res,next)=> {
    try {

        let productos = await  productosModel.getProductos();
        res.json({productos});
        // vista del home con TODOS los productos
    } catch(error) {
        res.json({status : 'error'});
    }

})


router.get('/:id_p', async(req,res,next)=> {

    try {
        // hola : nu
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
     
module.exports = router; 