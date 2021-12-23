//adicionar um event listener na tabela principal, assim, ela detecta
//qualquer evento em qualquer child e retira o paciente diretamente.
//mesmo que o paciente tenha sido adicionado após o carregamento do remover-paciente.js

let table = document.querySelector('#tabela-pacientes');

table.addEventListener('dblclick',function(event){
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    
    paiDoAlvo.classList.add('fadeOut');
    setTimeout(function(){
        paiDoAlvo.remove();
    },500);
});

