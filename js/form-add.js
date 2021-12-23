let camposNomes =["nome","peso","altura","gordura","imc"];

function montaTd(paciente) {
    let camposTd = new Array(5);

    //cada campo de paciente na tabela fica info-nomeDoCampo
    for (let i = 0; i < camposTd.length; i++) {
        camposTd[i] = document.createElement('td');
        camposTd[i].classList.add(`info-${camposNomes[i]}`);
    }

    camposTd[0].textContent = paciente.nome;
    camposTd[1].textContent = paciente.peso;
    camposTd[2].textContent = paciente.altura;
    camposTd[3].textContent = paciente.gordura;
    camposTd[4].textContent = paciente.imc;

    return camposTd;
}

function montaTr(camposTd) {
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    //adiciona cada td ao paciente
    camposTd.forEach(campoTd=>{
       pacienteTr.appendChild(campoTd); 
    })

    return pacienteTr;
}

/**
 * Adiciona todos os valores à tabela
 * 
 * @param {Array<Object>} camposValues 
 */
function addToTable(paciente){
    
    //monta cada campo em uma td para ser adicionada à tabela
    let camposTd = montaTd(paciente);

    //cria uma table row de paciente adicionando cada campo à tr
    let pacienteTr = montaTr(camposTd);

    //adiciona à tabela
    let table = document.querySelector('#tabela-pacientes');
    table.appendChild(pacienteTr);
}
