var express = require('express');
var router = express.Router();
const livros = require('../data/livros'); 

/* Dados dos autores */
const autores = [
  { nome: "Machado de Assis", imagem: "/images/MAssis.webp", link: "/autor1.html" },
  { nome: "Clarice Lispector", imagem: "/images/CLispector.png", link: "/autor2.html" },
  { nome: "Jane Austen", imagem: "/images/janeAusten.webp", link: "/autor3.html" },
  { nome: "Fiódor Dostoiévski", imagem: "/images/dostoevskij.webp", link: "/autor4.html" },
  { nome: "Louisa May Alcott", imagem: "/images/louisaMay.webp", link: "/autor5.html" }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { livros, autores });
});

router.get('/livro/:id', function(req, res) {
  const livroId = parseInt(req.params.id);
  const livro = livros.find(l => l.id === livroId);

  if (!livro) {
    return res.status(404).send("Livro não encontrado");
  }

  res.render('info-livro', { livro });
});

module.exports = router;
