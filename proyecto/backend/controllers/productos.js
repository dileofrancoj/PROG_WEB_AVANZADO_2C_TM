var express = require('express');
var router = express.Router();

const productosModel = require('../models/productosModel');

router.get('/:idCliente', async (req, res, next) => {
    try {
        let productos = await productosModel.getProductos(req.params.idCliente);
        res.json({ status : 'ok',data : productos});
    } catch(error) {
        res.status(500).json({status : 'error'});
        throw error;
    }
});

router.get('/:idCliente/:idProducto', async(req,res,next)=> {
    try {
        let producto = await productosModel.getProducto(req.params.idCliente, req.params.idProducto);
        if(producto.length > 0) {

            res.json({ status : 'ok',data : producto});
        } else {
            res.json({status : 'ok'});
        }

    } catch(error) {    
        res.status(500).json({status : 'error'});
    }
})

module.exports = router;
