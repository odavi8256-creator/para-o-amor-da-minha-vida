function iniciarQuiz() {
    document.getElementById("inicio").innerHTML = `
        <h1>😂 Quiz do Amor 😂</h1>

        <p><b>1️⃣ Se eu te chamasse para sair agora, você iria?</b></p>
        <button class="respostaErrada">🙄 Não</button>
        <button class="respostaErrada">🤔 Talvez</button>
        <button class="respostaCerta">❤️ Sim, sem pensar duas vezes.</button>

        <hr>

        <p><b>2️⃣ Quem manda mais na relação? 👀</b></p>
        <button class="respostaCerta">👑 Eu</button>
        <button class="respostaErrada">😎 Você</button>
        <button class="respostaErrada">🤝 Ninguém</button>

        <hr>

        <p><b>3️⃣ Qual é o prêmio por acertar esse quiz?</b></p>
        <button class="respostaErrada">🍕 Uma pizza</button>
        <button class="respostaErrada">💸 R$ 1 milhão</button>
        <button class="respostaCerta">💋 Muitos beijinhos e a surpresa final.</button>

        <br><br>

        <button id="finalizarQuiz">✅ Finalizar Quiz</button>
    `;

    let acertos = 0;

    document.querySelectorAll(".respostaCerta").forEach(botao => {
        botao.addEventListener("click", () => {
            if (!botao.disabled) {
                acertos++;
                botao.disabled = true;
                botao.style.background = "lightgreen";
            }
        });
    });

    document.querySelectorAll(".respostaErrada").forEach(botao => {
        botao.addEventListener("click", () => {
            botao.style.background = "tomato";
        });
    });

    document.getElementById("inicio").innerHTML = `
    <h1>🎉 Parabéns! ❤️</h1>
    <p>Você desbloqueou a próxima surpresa!</p>
    <button id="continuar">💖 Continuar</button>
`;

document.getElementById("continuar").addEventListener("click", () => {
    iniciarJogo2();
});
                
            `;
        } else {
            alert("😂 Você ainda não acertou todas as perguntas!");
        }
    });
}
