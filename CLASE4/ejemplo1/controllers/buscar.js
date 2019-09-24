const express = require('express');
const router = express.Router();

const buscarM = require('../models/contactoModel');

// buscarM.comprobarCorreo
// PUT URL:PUERTO/RUTA/2 + {paquete de datos}
// DELETE  URL : PUERTO / RUTA / 2 
router.get('/:id', (req,res,next)=> {
    // localhost:3000/productos/x
    // localhost:3000/productos?id=2&nombre=productoX
    // POST --> URL {DATOS} (req.body)
    console.log(req.params);
    let idProducto = req.params.id;
    res.json({status : 'ok', params : [idProducto]});
})


// localhost:3000/buscar/1
// localhost:3000/buscar/2
// localhost:3000/buscar/n

// controller por cada endpoint (post, put , delete, get)
// productos Controller + productos Model

// get ('/')
// get(':id')
// put('/:id')
// post('')
// delete('/id')
module.exports = router;
