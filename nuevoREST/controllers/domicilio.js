const express = require('express');
const router = express.Router();
const usuariosModel = require('./../models/usuariosModel');
const domicilioModel = require('./../models/domicilioModel');


router.get('/provincias', async(req,res,next)=> {
		try {
			let data = await domicilioModel.getProvincias();
			res.json({status : 'ok', data : data});
		} catch(error) {
			res.status(500).json({status : 'error'});
		}
})

router.get('/:id_cliente', async(req,res,next)=> {
	try {
		let data  = await usuariosModel.getDirections(req.id, req.params.id_cliente);
		console.log(data);
		res.json({status : 'ok', data: data});
	} catch(error) {
		res.status(500).json({status : 'error'});
	}
})

router.post('/:id_cliente', async(req,res,next)=> {
	try {
		let obj = {
			 calle_d : req.body.calle,
			 altura_d : req.body.altura,
			 cp_d : req.body.cp,
			 piso_d : req.body.piso,
			 provincia_d : req.body.provincia,
			 id_u_d : req.id,
			 id_c_d : req.params.id_cliente
		}
		if(obj.calle_d != '' && obj.altura_d != '' && obj.cp !='' && obj.piso !='' && obj.provincia !='') {
			let cargar_direccion = await usuariosModel.loadDirection(obj)
			res.json({status : 'ok'})
		} else {
			res.json({status : 'error'})
		}
	} catch(error) {
		console.log(error);
		res.status(500).json({status : 'error'});
	}
})


module.exports = router; 
