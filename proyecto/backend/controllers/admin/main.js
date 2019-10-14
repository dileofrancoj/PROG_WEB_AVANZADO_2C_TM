const express = require('express');
const router = express.Router();
const mainModel = require('../../models/mainModel');
// localhost:3000/admin/main/1
router.get('/:id_cliente', async(req,res,next)=> {
    try {
        console.log("entra a cliente")
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let eventos =await  mainModel.getEventos(req.params.id_cliente);
            console.log(eventos);
            res.json({status : 'ok', eventos})
        } else {
            res.status(401).json({status : 'unauthorized'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({status : 'error'})
    }
});

module.exports = router; 