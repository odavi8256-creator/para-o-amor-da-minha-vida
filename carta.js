function abrirCarta() {
    document.getElementById("inicio").innerHTML = `
        <div class="carta">
            <h1>💌 Para o amor da minha vida 💌</h1>

            <div id="textoCarta" style="
                max-width:700px;
                margin:auto;
                text-align:left;
                background:#fff;
                padding:20px;
                border-radius:15px;
                line-height:1.8;
                white-space:pre-line;
            ">

COLE SUA CARTA AQUI EXATAMENTE COMO VOCÊ ESCREVEU.

            </div>

            <br>

            <audio controls autoplay>
                <source src="musica.mp3" type="audio/mpeg">
            </audio>

            <br><br>

            <button onclick="location.reload()">
                ❤️ Recomeçar
            </button>
        </div>
    `;
}
