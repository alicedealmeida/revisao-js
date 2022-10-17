var filtro = document.querySelector('#filtrar-tabela');

filtro.addEventListener("input", function(){
    var pacienteNomes = document.querySelectorAll('.info-nome');
    var textoDigitado = filtro.value;

    if(textoDigitado.length > 0){
        pacienteNomes.forEach(function(paciente){
            nome = paciente.textContent; 
            if (nome != textoDigitado) {
                paciente.parentNode.classList.add("invisivel");
            } else {
                paciente.parentNode.classList.remove("invisivel");
            }
        });
    }
});

