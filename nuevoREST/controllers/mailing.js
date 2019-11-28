const express = require('express');
const router = express.Router();
const correosModel = require('./../models/correosModel');
const usuariosModel = require('./../models/usuariosModel');
router.post('/:id_cliente', async(req,res,next)=> {
	try {
		let nombre = req.body.fullname;
		let email = req.body.email;
		let message = req.body.message;
		if(nombre !="" && email !="" && message !="") {
			let correoAdmin = await usuariosModel.findClientById(req.params.id_cliente);

			let obj = {
				id_cliente_usuario : req.params.id_cliente,
				to : correoAdmin[0].mail_cliente,
				subject : 'Contacto de la web',
				html : 'Nuevo correo de : '+nombre+ " con mail de contacto : " + email + "<br>" + message

			}
			await correosModel.sendGenericEmail(obj);
			res.json({status : 'ok'})			
		} else {
			res.json({status : 'error'})

		}


	} catch(error) {
		console.log(error);
		res.status(500).json({status : 'error'})
	}
})


module.exports = router;