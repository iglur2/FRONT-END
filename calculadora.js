var valorAtual = 0;

function adicionarValor(n) {
    if (valorAtual === 0) {
        valorAtual = n;
    } else {
        valorAtual += n;
    }
    atualizarDisplay();
}

function adicionarOperacao(o) {
    if (valorAtual === 0){
        valorAtual = 0;
    } else {
        valorAtual += o;
    }
    atualizarDisplay();
}

function limpar() {
    valorAtual = 0;
    atualizarDisplay();
}

function calcular() {
    valorAtual = eval(valorAtual);
    atualizarDisplay();
}

function atualizarDisplay() {
    $('#display').html(valorAtual);
}