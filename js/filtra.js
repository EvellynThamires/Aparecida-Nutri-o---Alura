var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    var pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
        for(i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            //Text Content para extrair o conteúdo nome.
            var nome = tdNome.textContent;
            
            //Expressão regular. O que deseja procurar, como queremos que ela busque (letra maiscula ou minuscula).
            var expressao = new RegExp(this.value, "i")
            
            //Ele testa se "nome", tem algo da variável expressão.
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }
            else{
                paciente.classList.remove("invisivel")
            }
        }
    }
    else{
        for(i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }

    
});

