//Funções anonimas ou nomeadas.
var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener("click", function(event){ //Chama o evento.
    event.preventDefault() //Previne o evento padrão do botão.
    
    var form = document.querySelector("#form-adiciona")
        
    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = mostraTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes") //Acessa o tbody.

    //Para que o parametro se torne filho da variavel tabela. Assim adicionando uma nova linha na tabela.
    tabela.appendChild(pacienteTr);

})

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

    //Cria uma nova td no html.
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Substitui por novas informações. Coloca o valor do form dentro da Td.
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Faz com que estes elementos se tornem filhos.
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
}

