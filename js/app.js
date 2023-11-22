let tempoTotal = 25056000; // 1 dia em segundos (60 segundos * 60 minutos * 24 horas)
let temporizador;

function atualizarTemporizador() {
    const dias = Math.floor(tempoTotal / (60 * 60 * 24));
    const horas = Math.floor((tempoTotal % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((tempoTotal % (60 * 60)) / 60);
    const segundos = tempoTotal % 60;

    document.querySelector('.days').innerText = `${dias}`;
    document.querySelector('.hours').innerText = `${horas}`;
    document.querySelector('.minutes').innerText = `${minutos}`;
    document.querySelector('.seconds').innerText = `${segundos}`;
}

function iniciarTemporizador() {
    temporizador = setInterval(function() {
        if (tempoTotal > 0) {
            tempoTotal--;
            atualizarTemporizador();
        } else {
            pararTemporizador();
            alert("Tempo esgotado!");
        }
    }, 1000); // atualiza a cada 1 segundo (1000 milissegundos)
}

function pararTemporizador() {
    clearInterval(temporizador);
}

// Chame a função de atualização inicial para exibir o tempo inicial
atualizarTemporizador();

// Inicie o temporizador automaticamente
iniciarTemporizador();