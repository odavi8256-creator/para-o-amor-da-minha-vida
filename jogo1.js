function iniciarJogo1() {
    document.getElementById("inicio").innerHTML = `
        <h1>🎮 Ache o ❤️</h1>
        <p>Clique no ❤️ para continuar!</p>

        <div style="font-size:40px;">
            <button>🌸</button>
            <button>⭐</button>
            <button>🍕</button>
            <button>🦋</button>
            <button>🎈</button>
            <button>🌙</button>
            <button>🍀</button>
            <button id="coracao">❤️</button>
            <button>🐱</button>
            <button>🌻</button>
            <button>🍩</button>
            <button>🎁</button>
            <button>⚽</button>
            <button>🍓</button>
            <button>🌈</button>
            <button>🧸</button>
            <button>🐼</button>
            <button>🎀</button>
        </div>
    `;

    document.getElementById("coracao").addEventListener("click", () => {
        document.getElementById("inicio").innerHTML = `
            <h1>🎉 Você encontrou meu coração! ❤️</h1>

            <button id="proximoJogo">
                ➡️ Próxima etapa
            </button>
        `;

        document.getElementById("proximoJogo").addEventListener("click", () => {
            // Aqui vamos colocar o quiz.
        });
    });
}
