var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
const jwt = require('jsonwebtoken');
var indexRouter = require('./controllers/index');
var usersRouter = require('./controllers/users');
const productos = require('./controllers/productos');
const usuarios = require('./controllers/usuarios');
const auth = require('./controllers/auth');
const dotenv = require('dotenv');
dotenv.config();

const productosAdmin = require('./controllers/productosAdmin');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
secured = (req,res,next) => {
  // Headers : content-type
  // Authorization : token
  let token = req.headers.authorization; 

  // JWT amosd12jsdn81nasd89acfAD
  // replace reemplaza el JWT y solo deja el token para poder operar
  // const jwt = require('jsonwebtoken');

  token = token.replace('JWT ','');
  const publicKey = fs.readFileSync('./claves/publica.pem');
  let decoded = jwt.verify(token, publicKey);
  console.log("jwt decoded",decoded);

    req.user_id = decoded.id;
    next();

}


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productos);
app.use('/usuarios', usuarios);
app.use('/auth', auth);
app.use('/productosAdmin', secured, productosAdmin)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
