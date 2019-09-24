var express = require('express');
var router = express.Router();
const contactoM = require('../models/contactoModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/', (req,res,next)=> {
  // req : Requests (información que llega al controller)
  // res : Response La información que envia (sale) del controller res.json | res.end | res.send | res.status
  // next() break; 

  let obj = {nombre : req.body.nombre, email : req.body.email }
  let statusModel = contactoM.comprobarCorreo(obj);
  if(statusModel.status=='ok') {

    // res.render('index',{status : 'ok', user : nombre, message : 'correo enviado'});
    res.json({status : 'ok' , user : obj.nombre})
  } else {
    // correo o nombre invalido
    console.log("información invalida")
    res.json({status : 'error', message : 'usuario o mail invalido'});
  }

})

module.exports = router;
