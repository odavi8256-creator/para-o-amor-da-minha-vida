const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {

    document.getElementById("inicio").innerHTML = `

    <div class="boasVindas">

        <h1>❤️ Bem-vinda, Madu ❤️</h1>

        <p class="frase">
            Algumas pessoas entram na nossa vida e mudam tudo...
            <br><br>
            Você foi uma delas.
        </p>

        <p class="frase2">
            Esse presente foi feito com todo carinho do mundo.
        </p>

        <button id="comecar">
            ❤️ Começar nossa história
        </button>

    </div>

    `;

    document.getElementById("comecar").addEventListener("click", () => {

        document.getElementById("inicio").innerHTML = `

        <h1>❤️ Nossa História ❤️</h1>

        <p>
            Em breve começa a nossa história...
        </p>

        `;

    });

});
