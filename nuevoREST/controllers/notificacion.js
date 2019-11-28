const express = require('express');
const router = express.Router();
const notificacionModel = require('./../models/notificacionModel')
router.post('/mp/:idMP', async(req,res,next)=> {
	try {
		let id_compra = req.params.idMP;
		let url_final_transaction = process.env.PETICION_MP + id_compra + "?access_token="+process.env.ACCESS_TOKEN
       	let rta_mp = await axios.get(url_final_transaction);
       	if(rta_mp.data.status == "approved") {

	         let rta_sql = await notificacionModel.aprobarCompra(req.params.idMP);
	         if(rta_sql) {
	            res.status(200).send()
	         }
        }

	} catch(error) {
		res.status(500).send()
	}
})


module.exports = router;