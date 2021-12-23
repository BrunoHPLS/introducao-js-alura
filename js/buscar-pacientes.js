//consumir uma api que gera mais pacientes, quando o botão de busca é clickado
let botao = document.querySelector('#buscar-pacientes');

botao.addEventListener('click',function() {
    console.log('Api https://api-pacientes.herokuapp.com/pacientes sendo consumida')
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener('load',function() {
        document.querySelector('#erro-ajax').hidden=true;
        if(xhr.status==200){
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
        
        pacientes.forEach(element=>{
            let paciente = transformaEmPacienteObj(element);
            addToTable(paciente);
        });  
        }else{
            document.querySelector('#erro-ajax').hidden=false;
        }
      
    });

    xhr.send();
    console.log('api consumida e pacientes adicionados com sucesso');
});

function transformaEmPacienteObj(element) {
    let paciente = {
        nome: element.nome,
        peso: element.peso,
        altura: element.altura,
        gordura: element.gordura,
        imc: element.imc
    }
    return paciente;
}