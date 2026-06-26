function abrirGaleria() {
    document.getElementById("inicio").innerHTML = `
        <h1>📸 Nossas Fotos ❤️</h1>

        <img id="foto" src="imagens/foto1.jpg" width="300">

        <br><br>

        <button id="proximaFoto">➡️ Próxima Foto</button>
        <br><br>
<button id="irJogo1">🎮 Continuar</button>
    `;

    const fotos = [
        "imagens/foto1.jpg",
        "imagens/foto2.jpg",
        "imagens/foto3.jpg",
        "imagens/foto4.jpg",
        "imagens/foto5.jpg"
    ];

    let indice = 0;

    document.getElementById("proximaFoto").addEventListener("click", () => {
        indice++;

        if (indice >= fotos.length) {
            indice = 0;
        }

        document.getElementById("foto").src = fotos[indice];
    });
document.getElementById("irJogo1").addEventListener("click", () => {
    iniciarJogo1();
});
}
