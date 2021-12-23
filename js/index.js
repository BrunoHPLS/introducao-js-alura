
console.log('código carregado de js/index.js');

//Ao iniciar a página, vai calcular todos os Imcs da tabela e validar os campos depois
calculaImcCampos(coletaPacientesDaTabela());
validaCamposDaTabela();


(function(){
    console.log('Código Js carregado completamente, o index.js tem como função validar os campos da tabela principal quando carregada pela primeira vez')
})();