function iniciarJogo2() {
    document.getElementById("inicio").innerHTML = `
        <h1>💖 Pegue meu coração!</h1>
        <p>Tente clicar no coração! 😜</p>

        <div style="position:relative; height:300px;">
            <button id="coracaoFujao"
                style="
                    position:absolute;
                    left:150px;
                    top:100px;
                    font-size:35px;
                    cursor:pointer;
                ">
                ❤️
            </button>
        </div>
    `;

    const coracao = document.getElementById("coracaoFujao");
    let fugidas = 0;

    coracao.addEventListener("mouseover", () => {
        if (fugidas < 6) {
            const x = Math.random() * 250;
            const y = Math.random() * 180;

            coracao.style.left = x + "px";
            coracao.style.top = y + "px";

            fugidas++;
        }
    });

    coracao.addEventListener("click", () => {
        document.getElementById("inicio").innerHTML = `
            <h1>🎉 Você conseguiu pegar meu coração! ❤️</h1>

            <p>Agora chegou a hora da surpresa...</p>

            <button id="surpresa">
                🎁 Clique aqui para descobrir
            </button>
        `;

        document.getElementById("surpresa").addEventListener("click", () => {
            // Aqui depois vamos abrir a carta e iniciar a música.
        });
    });
}
