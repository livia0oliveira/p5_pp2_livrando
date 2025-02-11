var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listasRouter = require('./routes/listas');
var info_livroRouter = require('./routes/info_livro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/listas', listasRouter);
app.use('/info_livro', info_livroRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log do erro no console
  res.status(500).render('layout', { 
      title: 'Erro', 
      body: `<h2>Ocorreu um erro!</h2>
              <p>${err.message}</p>
              <p><a href="/">Voltar para a página inicial</a></p>`
  });
});

module.exports = app;
