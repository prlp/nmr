function sim() {
    location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function desvia(botao) {
    botao.style.position = 'absolute';
    botao.style.bottom = geraPosicao(10, 90);
    botao.style.left = geraPosicao(10, 90);

}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

