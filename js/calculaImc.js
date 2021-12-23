//calcula o imc de todos os pacientes da tabela ou só de um
function calculaImc(peso,altura){
    return parseFloat(peso / (altura ** 2)).toFixed(2);
}

function calculaImcCampos(pacientes){
    pacientes.forEach(paciente => {
        let peso = paciente.querySelector('.info-peso').textContent;
        let altura = paciente.querySelector('.info-altura').textContent;
        let tdImc = paciente.querySelector('.info-imc');

        tdImc.textContent = calculaImc(peso,altura);
    });
}