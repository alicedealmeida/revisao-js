var filtro = document.querySelector('#filtrar-tabela');

filtro.addEventListener("input", function(){
    var pacienteNomes = document.querySelectorAll('.info-nome');
    var textoDigitado = filtro.value;
    console.log(textoDigitado);
    
    // for (i=0; i<pacienteNomes.length; i++){
    //     console.log(pacienteNomes[i].textContent);
    // }

    pacienteNomes.forEach(function(paciente){
        nome = paciente.textContent;

        if (nome == textoDigitado) {
            console.log("são iguais");
            paciente.parentNode.style.backgroundColor = "blue";
        }
    });

});
