const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {

    document.getElementById("inicio").innerHTML = `
        <div class="boasVindas">
            <h1>❤️ Bem-vinda, Madu ❤️</h1>

            <p>
                Algumas pessoas entram na nossa vida e mudam tudo...
                <br><br>
                Você foi uma delas.
            </p>

            <button id="comecar">❤️ Começar nossa história</button>
        </div>
    `;

    document.getElementById("comecar").addEventListener("click", () => {

        document.getElementById("inicio").innerHTML = `
            <div class="historia">
                <h1>❤️ Nossa História ❤️</h1>

                <p id="textoHistoria">
                    Existem pessoas que passam pela nossa vida...
                </p>
            </div>
        `;

        const texto = document.getElementById("textoHistoria");

        setTimeout(() => {
            texto.innerHTML = "E existem pessoas que mudam completamente a nossa vida...";
        }, 2500);

        setTimeout(() => {
            texto.innerHTML = "Você fez isso comigo, Madu. ❤️";
        }, 5000);

        setTimeout(() => {
            document.querySelector(".historia").innerHTML += `
                <br><br>
                <button id="proximo">❤️ Ver nossa história</button>
            `;

            document.getElementById("proximo").addEventListener("click", () => {
                document.getElementById("inicio").innerHTML = `
                    <h1>❤️ Em construção ❤️</h1>
                    <p>
                        Aqui vai entrar o contador, as fotos, a carta, a música e todas as surpresas.
                    </p>
                `;
            });

        }, 7500);

    });

});
