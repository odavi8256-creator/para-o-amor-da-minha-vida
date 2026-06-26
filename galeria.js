function abrirGaleria() {

    document.getElementById("inicio").innerHTML = `
        <h1>📸 Nossas Fotos ❤️</h1>

        <img id="foto" src="imagens/fotomadu1.jpg" width="300">

        <br><br>

        <button id="proximaFoto">➡️ Próxima Foto</button>
    `;

    const fotos = [
        "imagens/fotomadu1.jpg",
        "imagens/fotomadu2.jpg",
        "imagens/fotomadu3.jpg",
        "imagens/fotoeu1.jpg",
        "imagens/fotoeu2.jpg"
    ];

    let indice = 0;

    document.getElementById("proximaFoto").addEventListener("click", () => {
        indice++;

        if (indice >= fotos.length) {
            indice = 0;
        }

        document.getElementById("foto").src = fotos[indice];
    });

}
