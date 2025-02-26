var express = require('express');
var router = express.Router();
const livros = require('../data/livros')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('perfil', {livros});
});

module.exports = router;
