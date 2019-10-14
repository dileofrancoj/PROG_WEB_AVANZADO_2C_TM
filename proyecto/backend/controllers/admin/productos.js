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
               stock_producto : req.body.stock
           }
            let insert_content = await productosModel.insertProducto(obj);
            if(insert_content != undefined) {
                let objI = {
                    id_producto_precio : insert_content,
                    precio : req.body.precio,
                    vigencia : req.body.vigencia
                }
                let insert_precio = await productosModel.insertProductoPrecio(objI);
                console.log("El insert de precio es el : ", insert_precio)
                if(insert_precio != undefined) {
                    let objUpdate = {
                        id_precio_producto : insert_precio
                    }
                    let update_producto = await productosModel.updateProducto(insert_content,objUpdate);
                    if(update_producto) {
                        res.json({status : 'ok', message : 'Producto dado de alta'});
                    }
                }

            } 
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
