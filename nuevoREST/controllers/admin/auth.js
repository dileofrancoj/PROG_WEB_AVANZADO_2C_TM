const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const fs = require('fs');

const authModel = require('../../models/authModel');

router.post('/login',async(req,res,next)=> {
    try {
        let login_usr = await authModel.loginAdminUser(req.body.user, md5(req.body.password));
        if(login_usr.length > 0 ) {
            const privateKey = fs.readFileSync('./claves/privada.pem','utf-8');
            
            let signOptions = {
                expiresIn : "2h",
                algorithm : "RS256"
            }
                        // administrador
            var payload = {id : login_usr[0].id_cliente, role : 'cliente'};
            const cliente = {id : login_usr[0].id_cliente};
            const token = jwt.sign(payload,privateKey,signOptions);
            res.json({cliente, JWT : token});
        } else {
            res.json({status : 'invalid', message : 'Usuario o contraseña incorrectos'})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
    
});


module.exports = router; 