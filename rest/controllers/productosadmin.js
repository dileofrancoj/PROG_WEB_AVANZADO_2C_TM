const express = require('express');
const router = express.Router();
const productosModel = require('../models/productosModel');
// POST
// PUT
// DELETE
// POST // localhost:3000/productosAdmin/
// router.post | router.get | router.put | router.delete


// PUT, DELETE, POST, GET
// localhost:3000/productos {nombre_p : 'vino'}
// localhost:3000/productos/1 {nombre_p }

router.get('/', async(req,res,next)=> {
    res.json({id: req.user_id})
})

router.post('/', async(req,res,next)=> {
    try {
        // productosModel : insert into productos set ?, obj
        // <input type="text" name="nombre_p"
        let obj = {
            nombre_p : req.body.nombre_p,
            descripcion_p : req.body.descripcion_p,
            precio_p : parseFloat(req.body.precio_p),
            stock_p : parseInt(req.body.stock_p),
            imagen_p : req.body.imagen_p  
        }

        let productos_insert = await productosModel.insertProducto(obj);
        // el usuario puso una palabra dentro de un campo numerico de SQL
        // model : catch (error)
        if(productos_insert != undefined) {
            res.json({status : 'ok', id : productos_insert});

        } else {
            // 
        }


    } catch(error) {
        
        console.log("Entro al catch del controller")
        res.status(500).json({status : 'error'});
        throw error;
    }
})

router.put('/', async(req,res,next)=> {

})




module.exports = router; 
