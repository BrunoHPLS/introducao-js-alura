
/**
 * Recebe os valores dos campos e executa a validação de cada um
 * 
 * @param {*} paciente 
 * @returns se todos os campos são válidos ou não
 */
 function validaPaciente(paciente){
    let msgError=[];
    let valid = true;

    if(paciente.nome == '')
    {valid=false; msgError.push("Nome inválido");}
    if(paciente.peso < 0 || isNaN(paciente.peso) || paciente.peso == '')
    {valid=false; msgError.push("Peso inválido");}
    if(paciente.altura < 0 || isNaN(paciente.altura) || paciente.altura == '')
    {valid=false; msgError.push("Altura Inválida");}
    if(paciente.gordura < 0 || isNaN(paciente.gordura) || paciente.gordura == '')
    {valid=false; msgError.push("Gordura Inválida");}

    showErrorMsg(msgError);

    return valid;
}

function showErrorMsg(msg){
    let ul = document.querySelector("#mensagem-erro");
    //acesso todo o conteúdo dentro de uma tag por meio do innerHTML
    ul.innerHTML = "";
    msg.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
    });
}