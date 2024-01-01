const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');


const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');

const app = express();

// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app
  .use(logger('dev'))
  .use(cookieParser())

  /* formularios */
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  
  /* recursos estaticos */
  .use(express.static(path.join(__dirname, '..','public')))


  /* soporte para metodos  PUT, PATCH & DELETE*/
  .use(methodOverride('_method'))


  /*rutas*/
  .use('/', indexRouter)
  .use('/usuarios', usersRouter)
  .use('/productos', productsRouter);

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
