const express = require('express');
const router = express.Router();
const mainModel = require('../../models/mainModel');
const comprasModel = require('../../models/comprasModel');




router.get('/:id_cliente/:id_compra', async(req,res,next)=> {
    try {
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let id_cliente = req.params.id_cliente;
            let id_compra = req.params.id_compra;
            let getDatosCompra = await comprasModel.getDatosCompra(id_cliente,id_compra);
            res.json({status : 'ok', data : getDatosCompra})
        } else {
            res.status(401).json({status : 'unauthorized'})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

router.get('/:id_cliente', async(req,res,next)=> {
    try {
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let eventos =await  mainModel.getEventos(req.params.id_cliente);
            let productos = await mainModel.getProductos(req.params.id_cliente);
            let compras = await comprasModel.getComprasAdmin();
            console.log(eventos);
            res.json({status : 'ok', eventos, data : compras, productos})
        } else {
            res.status(401).json({status : 'unauthorized'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({status : 'error'})
    }
});


router.put('/:id_cliente/:id_compra', async(req,res,next)=> {
    try {
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let estado = req.body.estado;
            let id_compra = req.params.id_compra;
            let aprobar_compra = await comprasModel.aprobarCompraAdmin(estado,id_compra);
            res.json({status : 'ok'})
        } else {
            res.status(401).json({status : 'unauthorized'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({status : 'error'})
    }  
})
module.exports = router; 