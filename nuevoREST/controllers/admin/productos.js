const express = require('express');
const router = express.Router();
const productosModel = require('../../models/productosModel');
const pool = require('../../bd.js');
router.get('/:id_cliente/:id_producto', async(req,res,next) => {
    try {
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let content  = await productosModel.getProducto(req.params.id_cliente,req.params.id_producto); 
        res.json({status : 'ok', data : content});
        } else {
            res.status(401).json({status : 'unauthorized'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : "error"});
    }
})


router.get('/:id_cliente', async(req,res,next)=> {
   try{
    if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {

           let all_content = await productosModel.getProductos(req.id_cliente);
           res.json({status : 'ok', data : all_content});
       } else {
           res.status(401).json({status : 'unauthorized'});
       }
    } catch(error) {

   }
})

router.post('/:id_cliente', async(req,res,next)=> {
   try{
       if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
           let obj = {
               id_cliente_producto : req.params.id_cliente,
               nombre_producto : req.body.nombre,
               descripcion_producto : req.body.descripcion,
               foto_producto : req.body.foto,
               stock_producto : req.body.stock,
               precio_producto : req.body.precio,
               visibilidad_producto : req.body.visibilidad
           }
           console.log("Llega un producto para dar de alta : "+obj)
            let insert_content = await productosModel.insertProducto(obj);
            if(insert_content) {
                res.json({status : 'ok', message : 'Producto dado de alta'});

            }
    
            
        } else {
            res.status(401).json({status : 'unauthorized'});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
   }
})

router.put('/:id_cliente/id_contenido', async(req,res,next) => {
    try{
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let obj = {
                id_cliente_producto : req.params.id_cliente,
                nombre_producto : req.body.nombre,
                descripcion_producto : req.body.descripcion,
                foto_producto : req.body.foto,
                stock_producto : req.body.stock
            }
            let update_content = await productosModel.updateProducto(obj,req.params.id_contenido,req.params.id_cliente);
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


router.delete('/:id_cliente/:id_producto', async(req,res,next) => {
    try{
        if(req.role == "cliente" && req.params.id_cliente == req.id_cliente) {
            let delete_content = await productosModel.deleteProducto(req.params.id_producto,req.params.id_cliente);
            if(delete_content) {
                res.json({status : 'ok', id_contenido : req.params.id_producto})
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
