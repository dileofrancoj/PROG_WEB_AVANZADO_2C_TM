const express = require('express');
const router = express.Router();
const comprasModel = require('../models/comprasModel');

router.get('/:id_cliente/:id_compra', async(req,res,next)=> {
    try {
        console.log(req.params.id_cliente);
        console.log(req.id);
        console.log(req.params.id_compra);
        let getDetalle = await comprasModel.getDetalleCompra(req.params.id_cliente,req.id,req.params.id_compra);
        console.log(getDetalle);
        res.json({status : 'ok', data : getDetalle})
    } catch(error) {
        console.log(error);
        res.json({status : 'error'});
    }    
})

router.get('/:id_cliente', async(req,res,next)=> {
    try {
        let get_compra = await comprasModel.getComprasUsr(req.id);
        res.json({status : 'ok', data : get_compra})
    } catch(error) {
        console.log(error);
        res.json({status : 'error'});
    }
})


router.post('/:id_cliente', async(req,res,next)=> {
    try {
        if(typeof req.body.monto_compra != 'undefined'  && typeof req.body.direccion_compra != 'undefined') {
            let monto_compra = req.body.monto_compra;
            let id_provincia = req.body.direccion_compra

            let compra_ok = await comprasModel.comprar(req.id, req.params.id_cliente, monto_compra, id_provincia);
            console.log(compra_ok);
            if(compra_ok == "nostock") {
                
                res.json({status : 'nostock'});
            } else {
                res.json({status : 'ok', url : compra_ok})

            }            
    } else {
        res.json({status : 'error'})
    }

    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

module.exports = router;