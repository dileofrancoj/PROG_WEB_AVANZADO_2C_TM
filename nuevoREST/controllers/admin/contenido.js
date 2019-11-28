const express = require('express');
const router = express.Router();
const contenidoModel = require('../../models/contenidoModel');
const multer = require('multer');
var upload = multer({dest: './uploads/'});
const fs = require('fs');
const uuid = require('uuid');
// Contenido visible para el administrador
// En cada controller debe comprobarse si el admin del token coincide con el de la db
// FRONT

// funcion del get contenido :OK
router.get('/:id_cliente/:id_contenido', async(req,res,next) => {
    try {
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let content  = await contenidoModel.getContenido(req.params.id_cliente,req.params.id_contenido); 
            console.log("Se enviara : ", content);
            res.json({status : 'ok', data : content});
        } else {
            res.status(401).json({status : 'unauthorized'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : "error"});
    }
})

// Función del GET ok
router.get('/:id_cliente', async(req,res,next)=> {
   try{
    if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {

           let all_content = await contenidoModel.getContenidos(req.id_cliente);
           res.json({status : 'ok', data : all_content});
       } else {
           res.status(401).json({status : 'unauthorized'});
       }
    } catch(error) {

   }
})


router.post('/test', upload.array('file', 1), async(req,res,next)=> {
    try {

        console.log("entra aca")
       
    } catch(error) {
        throw error;
    }
})

// Función del insert OK
router.post('/:id_cliente',upload.array('file', 1), async(req,res,next)=> {
   try{
    if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
        let uuid_foto = uuid()
        console.log(req.files)
        let obj = {
            id_cliente_contenido : req.id_cliente,
            titulo_contenido : req.body.titulo_contenido,
            descripcion_contenido : req.body.descripcion_contenido,
            multimedia_contenido : uuid_foto+'.jpg',
            fecha_contenido : req.body.fecha_contenido,
            precio_contenido : req.body.precio_contenido,
            link_contenido : req.body.link_contenido
        }
        fs.createReadStream('./uploads/'+req.files[0].filename).pipe(fs.createWriteStream('./uploads/'+req.files[0].originalname)); 
        //borramos el archivo temporal creado
        fs.unlink('./uploads/'+req.files[0].filename, (err)=> {
            if(err){console.log(err);}
        }); 
        let insert_content = await contenidoModel.insertContenido(obj);
        if(insert_content != undefined) {
            res.json({status :'ok', id : insert_content});
        } 
    } else {
        res.status(401).json({status : 'unauthorized'})
    }
   } catch(error) {
       console.log(error);
        res.status(500).json({status : 'error'})
   }
})


// Funcion de editar contenido : 
router.put('/:id_cliente/:id_contenido', async(req,res,next) => {
    try{
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let obj = {
                titulo_contenido : req.body.titulo_contenido,
                descripcion_contenido : req.body.descripcion_contenido,
                multimedia_contenido : req.body.multimedia_contenido,
                fecha_contenido : req.body.fecha_contenido,
                link_contenido : req.body.link_contenido,
                precio_contenido : req.body.precio_contenido
            }
            let update_content = await contenidoModel.updateContenido(obj,req.params.id_contenido, req.params.id_cliente);
            
            if(update_content) {
                res.json({status : 'ok', id_contenido : req.params.id_contenido})
            }
        } else {
            res.status(401).json({status : 'unauthorized'})
        }
    } catch(error) {
        res.status(500).json({status : 'error'})
 
    }
})

// Funcion de delete contenido : OK
router.delete('/:id_cliente/:id_contenido', async(req,res,next) => {
    try{
        console.log("id contenido : ", req.params.id_contenido);
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let delete_content = await contenidoModel.deleteContenido(req.params.id_contenido);
            if(delete_content) {
                res.json({status : 'ok', id_contenido : req.params.id_contenido})
            }  
        } else {
            res.status(401).json({status : 'unauthorized'})
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})

    }
})

module.exports = router; 
