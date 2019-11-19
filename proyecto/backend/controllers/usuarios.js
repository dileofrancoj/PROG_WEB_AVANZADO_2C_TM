const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');
const multer = require('multer');
const upload = multer({dest : './uploads'});
const fs = require('fs');

router.post('/upload/:id_cliente', upload.array('file',1),async(req,res,next)=> {
    try {
        fs.createReadStream('./uploads/'+req.files[0].filename).pipe(fs.createWriteStream('./uploads/'+req.files[0].originalname));
        
    } catch(error) {
        console.log(error);
    }
})


router.put('/changedatos/:id', async(req,res,next)=> {
    try {
        let actualizar_data = await usuariosModel.putUsuarioDatos(req.body.nombre_usuario, req.body.apellido_usuario, req.body.telefono_usuario,req.id);
        res.json({status : 'ok'})
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

router.put('/changepassword/:id', async(req,res,next)=> {
    try {

        console.log(req.body.password_usuario);
        let actualizar_data = await usuariosModel.putUsuarioPassword(req.body.password_usuario,req.id);
        res.json({status : 'ok'})
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.get('/', async(req,res,next)=> {
    try {
        let usr_data = await usuariosModel.getUsuario(req.id);
        res.json({status : 'ok', data : usr_data});
    } catch (error) {
        res.status(500).json({status : 'error'});
    }
})



module.exports = router;