const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const fs = require('fs');

const authModel = require('../models/authModel');

router.post('/login',async(req,res,next)=> {
    try {
        let login_usr = await authModel.loginUser(req.body.mail_usuario, md5(req.body.password_usuario));
        if(login_usr.length > 0 ) {
            const privateKey = fs.readFileSync('./claves/privada.pem','utf-8');
            
            let signOptions = {
                expiresIn : "2h",
                algorithm : "RS256"
            }
            
            if(login_usr[0].permisos_usuario == 0){
                // usuario comun de la plataforma
                var payload = {id : login_usr[0].id_usuario, role : 'user'};
            } else {
                // administrador
                var payload = {id : login_usr[0].id_usuario, role : 'user'};

            }

            if(login_usr[0].cuenta_confirmada_usuario == 1) {
                const usuario = {id : login_usr[0].id_usuario, nombre : login_usr[0].nombre_usuario};
                const token = jwt.sign(payload,privateKey,signOptions);
                res.json({usuario, JWT : token});
            } else {
                res.json({status : 'confirm'});
            }

      
        } else {
            res.json({status : 'invalid', message : 'Usuario o contraseña incorrectos'})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
    
});


module.exports = router; 