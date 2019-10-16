const express = require('express');
const router = express.Router();
const compraModel = require('../models/compraModel');
router.post('/', async(req,res,next)=> {
    try {
        if(req.id && req.role) {

            let compra_ok = await compraModel.comprar(req.id);
            // compra_ok : url de mercadoPago
            res.json({status : 'ok', url : compra_ok});
        } else {
            res.status(401).json({status : 'unauthorized'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

module.exports = router; 