var express = require('express');
var router = express.Router();
var livros = require('../data/livros')

router.get('/', function(req, res) {
    const pesquisa = req.query.q || ""; // Captura a pesquisa do usuário
    const resultados = livros.filter(livro => 
        livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    );

    res.render('pesquisa', { resultados, pesquisa });
});

module.exports = router;
