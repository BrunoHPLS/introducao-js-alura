//Vai validar os campos do formulário e adicionar à tabela principal
let submitButton = document.querySelector('#adicionar-paciente');
let form = document.querySelector("#form-adiciona");


//Quando clickado no botão de submit,executa tudo
submitButton.addEventListener('click',function(event){
    event.preventDefault();
    console.log("Botão clickado");

    let paciente = coletaCamposDoForm();

    if(validaPaciente(paciente)){
        form.reset();
        addToTable(paciente);
        validaCamposDaTabela();
    }
});

/**
 * Coleta os campos do formulário
 * 
 * @returns os valores destes campos
 */
function coletaCamposDoForm(){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    console.log(paciente);
    return paciente;
}
