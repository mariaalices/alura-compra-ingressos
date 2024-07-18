function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantIngressos = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantIngressos) || quantIngressos <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipoIngresso == 'pista') {
        comprarPista(quantIngressos);
    }

    if(tipoIngresso == 'superior') {
        comprarCadeiraSuperior(quantIngressos);
    }

    if(tipoIngresso == 'inferior') {
        comprarCadeiraInferior(quantIngressos);
    }
}

function comprarPista(quantIngressos) {
    let quantPista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if(quantIngressos > quantPista) {
        alert('Quantidade de ingressos para o setor "Pista" indisponiveis');
    } else {
        quantPista = quantPista - quantIngressos;
        document.getElementById('qtd-pista').textContent = quantPista;
        alert('Compra realizada com sucesso!');
    }

}

function comprarCadeiraSuperior(quantIngressos) {
    let quantCadSup = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantIngressos > quantCadSup) {
        alert('Quantidade de ingressos para o setor: "Cadeira Superior"  indisponiveis');
    } else {
        quantCadSup = quantCadSup - quantIngressos;
        document.getElementById('qtd-superior').textContent = quantCadSup;
        alert('Compra realizada com sucesso!');
    }
}

function comprarCadeiraInferior(quantIngressos) {
    let quantCadInf = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantIngressos > quantCadInf) {
        alert('Quantidade de ingressos para o setor: "Cadeira Inferior" indisponiveis');
    } else {
        quantCadInf = quantCadInf - quantIngressos;
        document.getElementById('qtd-inferior').textContent = quantCadInf;
        alert('Compra realizada com sucesso!');
    }
}