document.addEventListener("DOMContentLoaded", function() {
    const carrosseis = document.querySelectorAll(".carrossel");

    carrosseis.forEach(carrossel => {
        const btnPrev = carrossel.querySelector(".prev");
        const btnNext = carrossel.querySelector(".next");
        const lista = carrossel.querySelector(".livros") || carrossel.querySelector(".autores-lista");

        btnNext.addEventListener("click", () => {
            lista.scrollBy({ left: 200, behavior: "smooth" });
        });

        btnPrev.addEventListener("click", () => {
            lista.scrollBy({ left: -200, behavior: "smooth" });
        });
    });
});