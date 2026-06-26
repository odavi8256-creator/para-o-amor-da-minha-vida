function iniciarJogo1() {

    document.getElementById("inicio").innerHTML = `
        <h1>🎮 Ache o ❤️</h1>

        <p>Clique no ❤️ para continuar!</p>

        <div id="emojis" style="font-size:40px; line-height:70px;">
            🌸 ⭐ 🍕 🦋 🎈 🌙<br>
            🍀 ❤️ 🐱 🌻 🍩 🎁<br>
            ⚽ 🍓 🌈 🧸 🐼 🎀
        </div>
    `;

    const coracao = document.querySelector("#emojis");

    coracao.addEventListener("click", (e) => {
        if (e.target.textContent === "❤️") {

            document.getElementById("inicio").innerHTML = `
                <h1>🎉 Você encontrou meu coração! ❤️</h1>

                <button id="proximoJogo">
                    ➡️ Próxima etapa
                </button>
            `;

            document.getElementById("proximoJogo").addEventListener("click", () => {
                // Aqui vamos colocar o quiz depois.
            });

        }
    });

}
