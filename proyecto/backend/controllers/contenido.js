const express = require('express');
const router = express.Router();
const contenidoModel = require('../models/contenidoModel');
router.get('/:id_cliente/', async(req,res,next)=> {
    try {
        let all_content = await contenidoModel.getContenidos(req.params.id_cliente);
        res.json({status : 'ok', data : all_content});
    } catch(error) {

        res.status(500).json({status : "error"});
    }
})

router.get('/:id_cliente/:id_contenido', async(req,res,next) => {
    try {
        let content  = await contenidoModel.getContenido(req.params.id_cliente,req.params.id_contenido); 
        res.json({status : 'ok', data : content});
    } catch(error) {
        console.log(error);
        res.status(500).json({status : "error"});
    }
})

module.exports = router; 