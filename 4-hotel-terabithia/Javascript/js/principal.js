let usuario;
let hospedes = [];
let quartosOcupados = [];
let reservas = [];
let agendaEventos = [];

function inicio() {
    let escolha = parseInt(prompt(`
🏨 HOTEL AURORA

Selecione uma opção:

[1] 🛏️ Reserva de Quartos
[2] 👤 Cadastro de Hóspedes
[3] 🎉 Eventos
[4] ❄️ Ar-Condicionado
[5] ⛽ Abastecimento
[6] 📊 Relatórios Operacionais
[7] 🚪 Sair`));

    switch(escolha){
        case 1:
            reserva_quartos();
            break;
        case 2:
            menuHospedes();
            break;
        case 3:
            eventos();
            break;
        case 4:
            arCondcionado();
            break;
        case 5:
            abastecer_carros();
            break;
        case 6:
            relatorios();
            break;
        case 7:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function login(){
    alert(`🏨 Bem-vindo ao Hotel Aurora!`);
    usuario = prompt(`👋 Digite seu nome`).trim();

    if (usuario == "" || !isNaN(usuario)){
        while(!usuario != "" || !isNaN(usuario)){
            alert(`Por favor informe um nome!`);
            usuario = prompt(`👋 Digite seu nome`).trim();
        }
    }

    let senha;
    let tentativas = 3;

    while (tentativas > 0){
        senha = parseInt(prompt(`🔑 Digite sua senha:`));

        if (senha == 123){
            alert(`🏨🔓 Bem-vindo ao Hotel Aurora, ${usuario}! É um imenso prazer ter você por aqui!`);
            inicio();
            return;
        }

        tentativas--;

        if (tentativas > 0){
            alert(`🔒 Senha errada! Você ainda tem ${tentativas} tentativa(s).`);
        } else{
            alert(`🔒 Tentativas excedidas!`);
        }
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 7');
    inicio();
}

function sair() {
    var confirma = confirm('🚪 Você deseja sair?');

    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}
