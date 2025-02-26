const livros = [
    { 
      id: 1, 
      titulo: "Memórias Póstumas de Brás Cubas", 
      imagem: "/images/brasCubas.jpg", 
      link: "/info_livro", 
      autor: "Machado de Assis", 
      editora: "Martin Claret", 
      sinopse: "Narrado pelo próprio protagonista após sua morte, o livro apresenta uma visão irônica e cínica da sociedade carioca do século XIX. Brás Cubas, um homem da elite, revisita episódios de sua vida marcada por futilidades, amores fracassados e ambições frustradas, tudo com um tom sarcástico e crítico. A obra rompe com os padrões tradicionais da época, utilizando uma narrativa fragmentada e dialogando diretamente com o leitor, o que a torna precursora do realismo no Brasil."
    },
    { 
      id: 2, 
      titulo: "Os Irmãos Karamázov", 
      imagem: "/images/karamazov.jpg", 
      link: "/livroinfo2.html",
      autor: "Fiódor Dostoiévski",
      editora: "Editora 34",
      sinopse: "Os Irmãos Karamázov é uma obra-prima da literatura russa que explora questões profundas sobre a moral, a fé, a justiça e o destino. Através da história de três irmãos, cada um representando diferentes aspectos da natureza humana, Dostoiévski investiga a luta interior e o conflito de valores em uma sociedade em transformação."
    },
    { 
      id: 3, 
      titulo: "A Biblioteca da Meia Noite", 
      imagem: "/images/bibliotecaDaMeiaNoite.jpg", 
      link: "/livroinfo3.html",
      autor: "Matt Haig",
      editora: "Intrínseca",
      sinopse: "A Biblioteca da Meia Noite é uma história sobre as infinitas possibilidades de nossa vida. Nora Seed tem a chance de explorar diferentes versões de sua vida ao entrar na biblioteca entre a vida e a morte, onde cada livro oferece uma versão alternativa do que poderia ter sido."
    },
    { 
      id: 4, 
      titulo: "O Estrangeiro", 
      imagem: "/images/oEstrangeiro.jpg", 
      link: "/livroinfo4.html",
      autor: "Albert Camus",
      editora: "Editora Record",
      sinopse: "O Estrangeiro é um romance filosófico que segue a vida de Meursault, um homem emocionalmente indiferente à sociedade e à morte. A obra questiona a existência, o absurdo da vida e a alienação do indivíduo, sendo um dos marcos do existencialismo."
    },
    { 
      id: 5, 
      titulo: "Emma", 
      imagem: "/images/emma.jpg", 
      link: "/livroinfo5.html",
      autor: "Jane Austen",
      editora: "Penguin",
      sinopse: "Emma é uma história sobre uma jovem rica e independente que tenta ser uma casamenteira para seus amigos, mas acaba se envolvendo em suas próprias confusões amorosas. O livro é uma análise satírica da classe social e da juventude na Inglaterra do século XIX."
    },
    { 
      id: 6, 
      titulo: "A Revolução dos Bichos", 
      imagem: "/images/a-revolucao-dos-bichos.jpg", 
      link: "/livroinfo6.html",
      autor: "George Orwell",
      editora: "Companhia das Letras",
      sinopse: "A Revolução dos Bichos é uma fábula política que narra a história de animais que se rebelam contra seus donos humanos para estabelecer uma sociedade igualitária. A obra é uma crítica feroz ao totalitarismo e às distorções dos ideais revolucionários."
    },
    { 
      id: 7, 
      titulo: "Ensaio Sobre a Cegueira", 
      imagem: "/images/Ensaio-Sobre-a-Cegueira.jpg", 
      link: "/livroinfo7.html",
      autor: "José Saramago",
      editora: "Cia das Letras",
      sinopse: "Em Ensaio Sobre a Cegueira, uma epidemia de cegueira súbita atinge uma cidade inteira, levando a sociedade ao colapso. A obra explora a natureza humana, a solidariedade e a brutalidade, abordando temas como a fragilidade da civilização."
    },
    { 
      id: 8, 
      titulo: "Noites Brancas", 
      imagem: "/images/noitesBrancas.webp", 
      link: "/livroinfo8.html",
      autor: "Fiódor Dostoiévski",
      editora: "Editora 34",
      sinopse: "Noites Brancas é uma obra de Dostoiévski que se passa em uma cidade russa durante o período das noites brancas, onde o protagonista, um sonhador solitário, se apaixona por uma mulher que, por sua vez, vive uma vida marcada pela dor e pelas incertezas."
    },
    { 
      id: 9, 
      titulo: "Mulherzinhas", 
      imagem: "/images/mulherzinhas.jpg", 
      link: "/livroinfo9.html",
      autor: "Louisa May Alcott",
      editora: "Harper & Row",
      sinopse: "Mulherzinhas narra a história de quatro irmãs e seus desafios enquanto crescem durante a Guerra Civil Americana. O livro aborda temas como o amadurecimento, os relacionamentos familiares e o papel das mulheres na sociedade."
    },
    { 
      id: 10, 
      titulo: "Dom Casmurro", 
      imagem: "/images/dcasmurro.jpg", 
      link: "/livroinfo10.html",
      autor: "Machado de Assis",
      editora: "Editora 34",
      sinopse: "Dom Casmurro é a história de Bentinho e sua obsessão com a fidelidade de sua esposa, Capitu. A obra explora o tema da dúvida e da incerteza, deixando em aberto as perguntas sobre a veracidade da história narrada."
    },
    { 
      id: 11, 
      titulo: "Orgulho e Preconceito", 
      imagem: "/images/orgulho-e-preconceito.jpg", 
      link: "/livroinfo11.html",
      autor: "Jane Austen",
      editora: "Penguin",
      sinopse: "Orgulho e Preconceito é uma crítica social disfarçada de romance, onde Elizabeth Bennet, uma jovem de classe média, deve lidar com questões de classe social, preconceito e orgulho, enquanto se apaixona por Darcy, um homem que inicialmente despreza sua família."
    },
    { 
      id: 12, 
      titulo: "A Hora Da Estrela", 
      imagem: "/images/horaDaEstrela.jpg", 
      link: "/livroinfo12.html",
      autor: "Clarice Lispector",
      editora: "Rocco",
      sinopse: "A Hora Da Estrela conta a história de Macabéa, uma jovem nordestina que vive no Rio de Janeiro e passa por uma existência sem grandes acontecimentos, até o momento em que sua vida chega ao fim. A obra é uma reflexão profunda sobre a solidão, o destino e a humanidade."
    }
  ];
module.exports = livros;
