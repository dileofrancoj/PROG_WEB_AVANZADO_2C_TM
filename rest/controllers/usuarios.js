// CONFIRMAR CUENTA 

// obm8og
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const uuid = require('uuid');
// uuid()
// POST localhost:3000/usuarios
// CONFIRMAR CUENTA (<a href="localhost:3000/usuarios/confirmar/TOKENUNICO" )
const usuariosModel = require('../models/usuariosModel')
router.post('/', async(req,res,next)=> {
    // md5 es una funcion no reversible para encriptar cadenas de caracteres
    // uuid genera un string aleatorio unico
    console.log("ID UUID GENERADO : ",uuid());
    try {
        let obj = {
            // req.body
            mail_u : req.body.mail_u,
            nombre_u : req.body.nombre_u,
            password_u : md5(req.body.password_u),
            apellido_u : req.body.apellido_u,
            codigo_confirmacion : uuid()
        }
        let insert_ok = await usuariosModel.insertUser(obj); // error sql
        console.log(insert_ok)
        if(insert_ok != undefined) {

            res.json({status:'ok', id :  insert_ok})
        }
    
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
} )

module.exports = router; 