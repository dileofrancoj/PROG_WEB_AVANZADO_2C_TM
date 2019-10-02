const express = require('express');
const router = express.Router(); 
const productosModel = require('../models/productosModel');

// acá deben ingresar los admins
router.post('/', async(req,res,next)=> {
    try {
        console.log(req.body.nombre_p);
        let obj = {
            nombre_p : req.body.nombre_p,
            descripcion_p : req.body.nombre_p,
            stock_p : parseInt(req.body.stock_p),
            precio_p : parseFloat(req.body.precio_p),
            imagen_p : req.body.imagen_p
        }
       let insert_ok = await productosModel.insertProducto(obj);
       if(insert_ok != undefined ) {
           res.json({status :'ok', id:insert_ok})
       } else {
           res.json({status : 'error'})
       } 
    } catch(error) {
        console.log(error)
        res.status(500).json({status:'error'})
    }
});

router.put('/:id', async(req,res,next)=> {
    try {
        let obj = {
            nombre_p : req.body.nombre_p,
            descripcion_p : req.body.descripcion_p,
            precio_p : req.body.precio_p,
            stock_p : req.body.stock_p,
            imagen_p : req.body.imagen_p
        }
        let update_ok = await productosModel.updateProducto(obj,req.params.id);
        if(update_ok) {
            res.json({status : 'ok'});
        }
    } catch(error) {
        console.log(error);
        res.json(500).send({status : 'error', error: error})
    }
})

router.delete('/:id', async(req,res,next)=> {
    try {
        let delete_ok = await productosModel.deleteProducto(req.params.id);
        if(delete_ok){
            res.json({status : 'ok'})
        }
    } catch(error) {
        res.json({status : 'error', error:error})
    }
})
module.exports = router;