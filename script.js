const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {
    document.getElementById("inicio").innerHTML = `
        <h1>❤️ Bem-vinda, Madu ❤️</h1>

        <p>
            Esse não é um simples site...
            <br><br>
            É um pedacinho do meu coração feito especialmente para você.
        </p>

        <button onclick="alert('Em breve você vai entrar na experiência completa ❤️')">
            Continuar ❤️
        </button>
    `;
});
