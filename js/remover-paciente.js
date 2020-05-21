var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com o duplo click");
//         //Remove o que foi clicado. This está ligado ao dono do evento.
//         this.remove()
//     });
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    // var alvoEvento = event.target
    // var paiDoAlvo = alvoEvento.parentNode //Ele que contém as tds.

    // paiDoAlvo.remove()

    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500);
});