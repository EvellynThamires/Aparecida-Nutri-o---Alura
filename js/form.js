//Funções anonimas ou nomeadas.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener("click", function(event){ //Chama o evento.
    event.preventDefault() //Previne o evento padrão do botão.
    
    var form = document.querySelector("#form-adiciona");
        
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = mostraTr(paciente);

    var erros = validaPaciente(paciente)

    console.log(erros)
    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        return; //Return vazio para que ele pare.
    }

    var tabela = document.querySelector("#tabela-pacientes"); //Acessa o tbody.

    //Para que o parametro se torne filho da variavel tabela. Assim adicionando uma nova linha na tabela.
    tabela.appendChild(pacienteTr);

    //Apagar os dados, depois que foi adicionado.
    form.reset();
    
    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = ""

})

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""

    //Percorre o array "Erros". 
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    }
)}

//Resgatar as informações do form. Acessa os inputs.
function obtemPacienteDoFormulario(form){
    //Objeto
    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function mostraTr(paciente){
    var pacienteTr = document.createElement("tr"); //Cria uma nova tr no html. Cria novas tags.

    //Adiciona a classe "paciente", nos novos pacientes.
    pacienteTr.classList.add("paciente");

    //Faz com que estes elementos se tornem filhos.
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length == 0){
        erros.push("O Nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("O Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("A Altura é inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A Gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O Peso não pode ser em branco.")
    }
    
    if(paciente.altura.length == 0){
        erros.push("A Altura não pode ser em branco.")
    }

    return erros;
}