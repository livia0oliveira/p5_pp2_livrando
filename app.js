var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var perfilRouter = require('./routes/perfil');
var pesquisaRouter = require('./routes/pesquisa')
var usersRouter = require('./routes/users');
var listasRouter = require('./routes/minhaslistas');
// var info_livroRouter = require('./routes/info_livro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.pesquisa = ""; // Define a variável para todas as páginas
  next();
});


app.use('/', indexRouter);
app.use('/perfil', perfilRouter);
app.use('/users', usersRouter);
app.use('/listas', listasRouter);
app.use('/pesquisa', pesquisaRouter);
// app.use('/info_livro', info_livroRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
