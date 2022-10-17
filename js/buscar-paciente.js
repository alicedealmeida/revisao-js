var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    //Para pegarmos a resposta quando a requisiçao HTTP voltar 
    //precisamos colocar um escutador de evento no próprio XMLHttpRequest, 
    //escutando o evento de load:
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
        var erroAjax = document.querySelector("#erro-ajax");
        /* Se você observar o que é impresso no console, 
        você vai ver que o servidor nos retorna um JSON, 
        um formato de texto muito comum hoje em dia na web.
        Como não queremos trabalhar com texto e sim com objetos Javascript, 
        vamos parsear este texto para um objeto Javascript equivalente. 
        Use a função JSON.parse() na resposta para transformar:*/
 
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // array de pacientes
            
            pacientes.forEach(function(paciente) {
                adicionaPaciente(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    //envio da requisição
    xhr.send();



});