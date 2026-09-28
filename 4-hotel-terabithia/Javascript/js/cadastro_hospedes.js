function menuHospedes() {

    let escolha = parseInt(prompt(`
🏨 HOTEL AURORA - CADASTRO DE HÓSPEDES

🖊️ [1] Cadastrar hóspede
🔍 [2] Pesquisar por nome
📖 [3] Pesquisar por prefixo
📋 [4] Listar hóspedes
📝 [5] Atualizar hóspede
🗑️ [6] Remover hóspede
🔙 [7] Voltar
`));

    switch(escolha){

        case 1:
            cadastrarHospede();
            break;

        case 2:
            pesquisarPorNome();
            break;

        case 3:
            pesquisarPorPrefixo();
            break;

        case 4:
            listarHospedes();
            break;

        case 5:
            atualizarHospede();
            break;

        case 6:
            removerHospede();
            break;

        case 7:
            inicio();
            break;

        default:
            alert(`Opção inválida, ${usuario}.`);
            menuHospedes();
            break;
    }
}

function verificarHospedes(){

    if(hospedes.length == 0){
        alert(`Nenhum hóspede cadastrado, ${usuario}.`);
        menuHospedes();
        return true;
    }

    return false;
}

//

function cadastrarHospede() {

    if(hospedes.length >= 15){
        alert(`Limite de hóspedes atingido.`);
        menuHospedes();
        return;
    }

    alert(`🏨 CADASTRO DE HÓSPEDE`);

    let nome = prompt(`Digite o nome completo do hóspede: `).trim()

        while(nome == "" || !isNaN(nome)){
            alert(`Digite o nome do hóspede! ${usuario}`)
            nome = prompt(`Digite o nome completo do hóspede: `).trim()
        }

    let hospedeExistente = hospedes.find(function(hospede){
        return hospede.nome.toUpperCase() == nome.toUpperCase();
    });
    
    if(hospedeExistente){
        alert(`Hóspede ja cadastrado, ${usuario}.`)
        menuHospedes();
        return;
    }

    let agora = new Date();

    let data = agora.toLocaleDateString("pt-BR");

    let hora = agora.toLocaleTimeString("pt-BR");

    hospedes.push({
        nome: nome,
        data: data,
        hora: hora
    })

    hospedes.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });


    alert(`Hóspede ${nome} cadastrado com sucesso!`);

    menuHospedes();
}
//

//
function pesquisarPorNome() {

    let nome = prompt(`Digite o nome do hóspede que deseja pesquisar:`).trim();

    while(nome == "" || !isNaN(nome)){
        alert(`Digite um nome, ${usuario}.`);
        nome = prompt(`Digite o nome do hóspede que deseja pesquisar:`).trim();
    }

    let hospedeEncontrado = hospedes.find(function(hospede) {
        return hospede.nome.toUpperCase() == nome.toUpperCase();
    });

    if(hospedeEncontrado){

        alert(`
🏨 HÓSPEDE ENCONTRADO

👤 Nome: ${hospedeEncontrado.nome}
📅 Data do cadastro: ${hospedeEncontrado.data}
🕒 Hora do cadastro: ${hospedeEncontrado.hora}
        `);

    } else {

        alert(`Hóspede não encontrado, ${usuario}.`);
    }

    menuHospedes();
}

function pesquisarPorPrefixo(){

    let prefixo = prompt(`Digite o prefixo do nome: `).trim();

    while (prefixo == "" || !isNaN(prefixo)){
        alert(`Digite um prefixo, ${usuario}.`)

        prefixo = prompt(`Digite o prefixo do nome: `).trim(); 
    }

    let hospedesEncontrados = hospedes.filter(function(hospede){
        return hospede.nome.toUpperCase().startsWith(prefixo.toUpperCase());
    });

    if (hospedesEncontrados.length == 0){
        alert(`Nenhum hóspede encontrado, ${usuario}`);
    }
    else{
        let resultado = `🔍 HÓSPEDES ENCONTRADOS\n\n`;

        for(let i = 0; i < hospedesEncontrados.length; i++){
            resultado += `👤 ${hospedesEncontrados[i].nome}\n`;
        }

        alert(resultado);
    }

    menuHospedes();
}

function mostrarListaHospedes(){

    let resultado = `👥 HÓSPEDES CADASTRADOS\n\n`;

    for(let i = 0; i < hospedes.length; i++){
        resultado += `${i + 1}. 👤 ${hospedes[i].nome}\n`;
    }

    return resultado;
}

function listarHospedes(){

    if(verificarHospedes()){
        return;
    }

    let resultado = `📋 LISTA DE HÓSPEDES\n\n`;

    for(let i = 0; i < hospedes.length; i++){

        resultado += `
${i + 1}. 👤 ${hospedes[i].nome}
📅 Data: ${hospedes[i].data}
🕒 Hora: ${hospedes[i].hora}\n\n
`;
    }

    alert(resultado);

    menuHospedes();
}


function atualizarHospede(){

    if(verificarHospedes()){
        return;
    }

    let resultado = mostrarListaHospedes();

    let indice = parseInt(prompt(`
${resultado}

Digite o número do hóspede que deseja atualizar:
`));

    while(isNaN(indice) || indice < 1 || indice > hospedes.length){

        alert(`Índice inválido, ${usuario}.`);

        indice = parseInt(prompt(`
${resultado}

Digite o número do hóspede que deseja atualizar:
`));
    }

    let hospede = hospedes[indice - 1];

    let novoNome = prompt(`
Digite o novo nome do hóspede:

Nome atual: ${hospede.nome}
`).trim();

    while(novoNome == "" || !isNaN(novoNome)){

        alert(`Digite um nome válido, ${usuario}.`);

        novoNome = prompt(`
Digite o novo nome do hóspede:

Nome atual: ${hospede.nome}
`).trim();
    }

    hospede.nome = novoNome;

    hospedes.sort(function(a, b){
        return a.nome.localeCompare(b.nome);
    });

    alert(`Operação realizada com sucesso, ${usuario}.`);

    menuHospedes();
}

function removerHospede(){

    if(verificarHospedes()){
        return;
    }

    let resultado = mostrarListaHospedes();

    let indice = parseInt(prompt(`
${resultado}

Digite o número do hóspede que deseja remover:
`));

    while(isNaN(indice) || indice < 1 || indice > hospedes.length){
        alert(`Índice inválido, ${usuario}.`);

        indice = parseInt(prompt(`
${resultado}

Digite o número do hóspede que deseja remover:
`));
    }

    let hospede = hospedes[indice - 1];

    let confirma = prompt(`
🗑️ REMOVER HÓSPEDE

Hóspede selecionado:
👤 ${hospede.nome}

Deseja realmente remover? (S/N)
`).toUpperCase().trim();

    while(confirma != "S" && confirma != "N"){
        alert(`Opção inválida, ${usuario}. Digite S ou N.`);

        confirma = prompt(`
Deseja realmente remover ${hospede.nome}? (S/N)
`).toUpperCase().trim();
    }

    if(confirma == "S"){
        hospedes.splice(indice - 1, 1);

        alert(`Operação realizada com sucesso, ${usuario}.`);
    }
    else{
        alert(`Operação cancelada, ${usuario}.`);
    }

    menuHospedes();
}