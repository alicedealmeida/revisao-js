var pesos = document.querySelectorAll('.info-peso');
var alturas = document.querySelectorAll('.info-altura');
var imcs = document.querySelectorAll('.info-imc');
var pacientes = document.querySelectorAll('.paciente');
    
    for (i=0; i<pacientes.length; i++){
        var pesoAtual = pesos[i].textContent;
        var alturaAtual = alturas[i].textContent;
        var imcAtual = imcs[i];
        imcAtual.textContent = calculaImc(pesoAtual, alturaAtual);
    }

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(1);
}

calculaImc();
