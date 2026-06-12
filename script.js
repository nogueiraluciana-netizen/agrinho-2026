// ======================
// QUIZ
// ======================

function verificarResposta(isCorrect) {

    const resultadoDiv =
        document.getElementById("quiz-resultado");

    if (isCorrect) {

        resultadoDiv.innerHTML =
            "🌱 Correto! A rotação de culturas e o plantio direto ajudam a preservar o solo e aumentar a sustentabilidade no campo.";

        resultadoDiv.style.color = "#2e7d32";

    } else {

        resultadoDiv.innerHTML =
            "❌ Opa! Tente novamente. Pense em práticas que ajudam a conservar o solo e os recursos naturais.";

        resultadoDiv.style.color = "#d32f2f";
    }
}

// ======================
// ROLAGEM SUAVE
// ======================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", function(e) {

        const destino =
            document.querySelector(this.getAttribute("href"));

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});