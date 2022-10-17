var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    //Para pegarmos a resposta quando a requisiçao HTTP voltar 
    //precisamos colocar um escutador de evento no próprio XMLHttpRequest, 
    //escutando o evento de load:
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    });

    //envio da requisição
    xhr.send();



});