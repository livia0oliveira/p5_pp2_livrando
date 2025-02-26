const livros = require('../data/livros');

const listas = [
    {
        id: 1,
        nome: "To pensando",
        capa: "/images/a-revolucao-dos-bichos.jpg",
        livros: livros // Inclui todos os livros na lista
    },
    {
        id: 2,
        nome: "Romance",
        capa: "/images/mulherzinhas.jpg",
        livros: livros // Inclui todos os livros na lista
    }
];

module.exports = listas;
