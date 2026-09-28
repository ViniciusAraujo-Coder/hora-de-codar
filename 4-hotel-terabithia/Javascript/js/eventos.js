function eventos() {
    alert('🏨🎉 HOTEL AURORA - EVENTOS');

    let espacoReservado;
    let cadeirasExtras = 0;
    let semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado"];
    let horaPermitida;

    let quantidadeParticipantes = parseInt(prompt(`👥 Digite a quantidade de participantes para o evento: `));

    while (
        isNaN(quantidadeParticipantes) ||
        quantidadeParticipantes < 1 ||
        quantidadeParticipantes > 350
    ) {
        if (isNaN(quantidadeParticipantes)) {
            alert(`⚠️ Digite um número válido!`);
        }

        else {
            alert(`⚠️ Capacidade inválida! O evento pode receber de 1 a 350 convidados.`);
        }

        quantidadeParticipantes = parseInt(prompt(`👥 Digite a quantidade de participantes para o evento: `));
    }

    if (quantidadeParticipantes > 220) {
        espacoReservado = "Colorado";
    }

    else {
        espacoReservado = "Laranja";

        if (quantidadeParticipantes > 150) {
            cadeirasExtras = quantidadeParticipantes - 150;
        }
    }

    alert(`📍 Auditório selecionado: ${espacoReservado}

👥 Participantes: ${quantidadeParticipantes}
🪑 Cadeiras adcionais: ${cadeirasExtras}`);


let horarioOcupado = true;
let diaDaSemana;
let horaInicial;
let duracao;
let duracaoTotal;

while (horarioOcupado) {

    diaDaSemana = prompt(`📅 Digite o dia da semana que ocorrerá o evento: `).trim().toLowerCase();
    
    while (!semana.includes(diaDaSemana)) {
        alert(`❌ Dia da semana inválido! ${usuario}.`);
    
        diaDaSemana = prompt(`📅 Digite o dia da semana que ocorrerá o evento: `).trim().toLowerCase();
    }
    
    if (diaDaSemana == "sabado" || diaDaSemana == "domingo") {
        horaPermitida = 15;
    }
    
    else {
        horaPermitida = 23;
    }
    
        horaInicial = parseInt(prompt(`🕒 Que horas irá se iniciar o evento? (Digite apenas números inteiros)`));

        while (
            isNaN(horaInicial) ||
            horaInicial > horaPermitida ||
            horaInicial < 7
        ) {

            alert(`❌ Digite apenas horas válidas!

⌚ Segunda a sexta: 07h–23h
⌚ Sábado e domingo: 07h–15h`);

            horaInicial = parseInt(prompt(`🕒 Que horas irá se iniciar o evento? (Digite apenas números inteiros)`));
        }

        //==========================================

        duracao = parseInt(prompt(`⏳ Qual a duração do evento? (Digite apenas números (1 - 12) horas): `));

        duracaoTotal = horaInicial + duracao;

        while (
            isNaN(duracao) ||
            duracao > 12 ||
            duracao < 1 ||
            duracaoTotal > horaPermitida
        ) {

            if (duracaoTotal > horaPermitida) {
                alert(`A duração do evento excede o horário permitido!

⌚ Segunda a sexta: 07h–23h
⌚ Sábado e domingo: 07h–15h`);
            }

            else {
                alert(`Digite uma duração válida!`);
            }

            duracao = parseInt(prompt(`⏳ Qual a duração do evento? (Digite apenas números (1 - 12) horas): `));

            duracaoTotal = horaInicial + duracao;
        }
        

        horarioOcupado = false;

        for (let reserva of agendaEventos) {

            if (
                reserva.dia == diaDaSemana &&
                reserva.horaInicio < duracaoTotal &&
                reserva.horaFim > horaInicial
            ) {

                horarioOcupado = true;

                alert(`❌ O horário está ocupado!

🏢 Empresa: ${reserva.empresa}
📅 Dia: ${reserva.dia}
🕒 Horário: ${reserva.horaInicio}h às ${reserva.horaFim}h`);
            }
        }
    }

    let empresa = prompt(`💼 Digite o nome da empresa que deseja reservar algum dos espaços: `).trim();

    while (empresa == "" || !isNaN(empresa)) {
        alert(`Digite um nome de empresa! ${usuario}.`);

        empresa = prompt(`💼 Digite o nome da empresa que deseja reservar algum dos espaços: `).trim();
    }


    let quantidadeGarcons = Math.ceil(quantidadeParticipantes/12);
    
    let reforco = Math.floor(duracao/2)
    
    let custoGarcons = (quantidadeGarcons + reforco) * duracao * 10.50;

    let custoCafe = quantidadeParticipantes * 0.2 * 0.80
    let custoAgua = quantidadeParticipantes * 0.5 * 0.40
    let custoSalgado = quantidadeParticipantes * 7 / 100 * 34

    let custoBuffet = custoCafe + custoAgua + custoSalgado;

    let totalEvento = custoGarcons + custoBuffet;

    alert(`🎉 RELATÓRIO DO EVENTO

🏢 EMPRESA - ${empresa}

📍 AUDITÓRIO - Auditório: ${espacoReservado}
🪑 Cadeiras adicionais: ${cadeirasExtras}

🔍 AGENDA
📅 Dia: ${diaDaSemana} | 🕒 Horário: ${horaInicial}h às ${duracaoTotal}h
⏳ Duração: ${duracao} hora(s)

👥 PARTICIPANTES
Convidados: ${quantidadeParticipantes}
Garçons necessários: ${quantidadeGarcons + reforco}

🍽️ BUFFET
☕ Café: ${(quantidadeParticipantes * 0.2).toFixed(1)} L
💧 Água: ${(quantidadeParticipantes * 0.5).toFixed(1)} L
🥪 Salgados: ${quantidadeParticipantes * 7} unidades

💰 CUSTOS
Garçons: R$ ${custoGarcons.toFixed(2)} | Buffet: R$ ${custoBuffet.toFixed(2)}

💵 TOTAL DO EVENTO: R$ ${totalEvento.toFixed(2)}`);

    let confirma = prompt(`
    Deseja confirmar a reserva do evento? (S/N)
    `).toUpperCase().trim();

    while (confirma != "S" && confirma != "N") {
        alert(`❌ Opção inválida, ${usuario}. Digite S ou N.`);

        confirma = prompt(` Deseja confirmar a reserva do evento? (S/N)`).toUpperCase().trim();
    }

    if (confirma == "S") {

        agendaEventos.push({
            dia: diaDaSemana,
            horaInicio: horaInicial,
            horaFim: duracaoTotal,
            empresa: empresa,
            total: totalEvento
        });

        alert(`✅ Reserva efetuada com sucesso.`);
    }
    else {
        alert(`❌ Reserva não efetuada.`);
    }

    inicio();
    
}