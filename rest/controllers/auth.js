// https://jwt.io/
// Login  -------> Server ( existe )
//  Token (JWT) <------ 

// API REST (Tokens : Escalable)
// obm8og


// JWT (header, payload, clave)
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs'); // file system (operaicones de archivos)
const md5 = require('md5');
const usuariosModel = require('../models/usuariosModel');
// https://travistidwell.com/jsencrypt/demo/
router.post('/login', async(req,res,next) => {
    try {
        // si la consulta no trae resultados (no match) length del vector
        // [
            // {id_u : 4, nombre_u : 'franco', cuenta_confirmada : 1}
        //]
        let usuario_ok = await usuariosModel.getUser(req.body.mail, md5(req.body.password));
        if(usuario_ok.length > 0 && usuario_ok[0].cuenta_confirmada == 1) {
            // HEADER
            var signOptions = {
                expiresIn : "2h",
                algorithm : "RS256"
            }
            const privateKey = fs.readFileSync('./claves/privada.pem','utf-8');
            // {id_u : ''}
            // cryptr
            const payload = {id : usuario_ok[0].id_u, nombre : usuario_ok[0].nombre_u};
            // (signOptions + payload) privateKey : TOKEN
            const usuario = {nombre : usuario_ok[0].nombre_u}
            const token = jwt.sign(payload, privateKey, signOptions);
            res.json({usuario, JWT : token});

            

        } else {
            res.json({status : "invalid"});

        }


    } catch(error) {
       console.log(error);
       res.status(500).json({status : 'error'})

    }
});


module.exports = router; 
