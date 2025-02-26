var express = require('express');
var router = express.Router();
const listas = require('../data/listas')

router.get('/', function(req, res, next) {
  res.render('listas', {listas});
});

router.get('/lista/:nome', function(req, res) {
  const listaNome = req.params.nome;
  const lista = listas.find(l => l.nome === listaNome);

  if (!lista) {
    return res.status(404).send("Lista não encontrada");
  }

  res.render('lista', { lista });
});


module.exports = router;
