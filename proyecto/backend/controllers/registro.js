const express = require('express');
const router = express.Router();
const registroModel = require('../models/registroModel');
//  Registro de usuario
const uuid = require('uuid');
const md5 = require('md5');

router.post('/:id_cliente', async(req,res,next) => {
    try {
        let obj = {
            id_cliente_usuario : req.params.id_cliente,
            nombre_usuario : req.body.nombre,
            apellido_usuario : req.body.apellido,
            mail_usuario : req.body.mail,
            telefono_usuario : req.body.telefono,
            codigo_mail_usuario : uuid(),
            password_usuario : md5(req.body.password)
        }
        let registro_ok = await registroModel.registrar(obj);
        if(registro_ok) {
            res.json({status : 'ok', message : 'Se envio un correo a tu cuenta de mail'})
        } else {
            res.status(500).json({status:"error"});

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})

module.exports  = router; 
