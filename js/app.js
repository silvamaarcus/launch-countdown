let dataFornecida = new Date("2024-09-06T23:59:59"); // Data desejada
let dataAtual = new Date();

// Convertendo em Data em segundos.
let diferencaEmSegundos = Math.floor((dataFornecida - dataAtual) / 1000);

let tempoTotal = diferencaEmSegundos;
let temporizador;

function atualizarTemporizador() {
    const dias = Math.floor(tempoTotal / (60 * 60 * 24));
    const horas = Math.floor((tempoTotal % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((tempoTotal % (60 * 60)) / 60);
    const segundos = tempoTotal % 60;

    document.querySelector('.days').innerText = padZero(dias);
    document.querySelector('.hours').innerText = padZero(horas);
    document.querySelector('.minutes').innerText = padZero(minutos);
    document.querySelector('.seconds').innerText = padZero(segundos);
}

// Função para verificar se o número possui 0 a esquerda. Se ñ tiver, vai colocar.
function padZero(num) {
    return num < 10 ? `0${num}` : num;
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
