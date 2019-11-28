const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');

router.get('/:id_cliente', async(req,res,next)=> {
    try {
         console.log(req.id, req.params.id_cliente);
        let usr_ok = await usuariosModel.findUserbyId(req.params.id_cliente,req.id);
        console.log(usr_ok)
        res.json({status : 'ok', data : usr_ok});
        
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.put('/:id_cliente', async(req,res,next)=> {
    try {
        if(req.body.nombre && req.body.apellido && req.body.telefono) {

            let obj = {
                nombre_usuario : req.body.nombre,
                apellido_usuario : req.body.apellido,
                telefono_usuario : req.body.telefono,
            }
            let putUsr = await usuariosModel.putUsr(req.params.id_cliente,req.id,obj);
            res.json({status : 'ok'})

        } else {
            res.json({status : 'error'})
        }        
    } catch(error){
        res.status(500).json({status : 'error'})
    }

})

module.exports = router;