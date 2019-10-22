var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const fs = require('fs');
const productosRouter = require('./controllers/productos');
const authRouter = require('./controllers/auth');
const registroRouter = require('./controllers/registro');
const contenidoRouter = require('./controllers/contenido');
const carritoRouter = require('./controllers/carrito');
const compraRouter = require('./controllers/compra');
// Admin controller
const authAdminRouter = require('./controllers/admin/auth');
const mainAdminRouter = require('./controllers/admin/main');
const contenidoAdminRouter = require('./controllers/admin/contenido');
const productosAdminRouter = require('./controllers/admin/productos');
var app = express();
app.use(cors())
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

secured = (req,res,next) => {
try {

  let token = req.headers.authorization; 

  token = token.replace('Bearer ','');
  const publicKey = fs.readFileSync('./claves/publica.pem');
  let decoded = jwt.verify(token, publicKey);

  req.id = decoded.id;
  req.role = decoded.role;
  next();
} catch (error) {
  res.status(401).json({status : 'unauthorized'});
}
}

securedAdmin = (req,res,next) => {
  try {
    let token = req.headers.authorization; 
    console.log(token);
    token = token.replace('Bearer ','');
    const publicKey = fs.readFileSync('./claves/publica.pem');
    var decodedAdmin = jwt.verify(token, publicKey);
    console.log(decodedAdmin);  
    req.id_cliente = decodedAdmin.id;
    req.role = decodedAdmin.role;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({status : 'unauthorized'});
  }
  }



app.use('/productos', productosRouter);
app.use('/auth', authRouter);
app.use('/registro', registroRouter);
app.use('/contenido', contenidoRouter); // ruta para ver posteos que se hagan dentro de la plataforma
app.use('/carrito', secured, carritoRouter); // ruta protegida para que un usuario pueda ver todos los productos que tiene reservados
app.use('/compra', secured, compraRouter);
// ADMIN 

app.use('/admin/auth', authAdminRouter);
app.use('/admin/main', securedAdmin,mainAdminRouter);
app.use('/admin/contenido', securedAdmin, contenidoAdminRouter);
app.use('/admin/productos', securedAdmin, productosAdminRouter);
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app ;
