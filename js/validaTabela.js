/**
 * Valida cada campo da tabela e caso tenha algum campo inválido,
 * altera a classe e a mensagem exibida no campo do imc
 */
function validaCamposDaTabela() {
    let pacientes = coletaPacientesDaTabela();

    pacientes.forEach(element => {

        let peso = element.querySelector('.info-peso').textContent;
        let altura = element.querySelector('.info-altura').textContent;
        let imc = element.querySelector('.info-imc');

        let pesoInvalido = (peso > 180 || peso < 0.4);
        let alturaInvalida = (altura >= 3 || altura < 0.1);

        if (pesoInvalido || alturaInvalida) {
            element.classList.add("paciente-invalido");
            imc.textContent = (pesoInvalido && !alturaInvalida) ? 'Peso Inválido' :
                (alturaInvalida && !pesoInvalido) ? 'Altura inválida' : 'Campos inválidos';
        } else {
            element.classList.remove("paciente-invalido");
        }
    });
}

