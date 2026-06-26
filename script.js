// Mensagem quando clicar no botão

const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {

    alert("Bem-vinda ao nosso cantinho, Madu ❤️");

});

// Chuva de corações

const container = document.createElement("div");
container.className = "hearts";
document.body.appendChild(container);

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.className = "heart";

    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "%";

    coracao.style.fontSize = (15 + Math.random() * 30) + "px";

    coracao.style.animationDuration = (4 + Math.random() * 5) + "s";

    container.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 9000);

}

setInterval(criarCoracao, 300);
