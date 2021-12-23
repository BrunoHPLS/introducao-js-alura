//A cada digitação dentro do campo, vai filtrar e apresentar os resultados na tabela
let campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input',function() {
    let pacientes = coletaPacientesDaTabela();
    let value = campoFiltro.value;
    pacientes.forEach(paciente=>{
        let regex = new RegExp(value,"i");//este regex filtra todos os valores parecidos
                                          //com o valor do campo,o 'i' é de case insensitive
        let nome = paciente.querySelector('.info-nome').textContent;
        if(!regex.test(nome)&&value!=''){
            paciente.hidden=true;
        }else{
            paciente.hidden=false;
        }
    })
});