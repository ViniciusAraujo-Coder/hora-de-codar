function relatorios() {

    alert(`🏨 HOTEL AURORA - RELATÓRIOS OPERACIONAIS`);

    let totalReservas = reservas.length;

    let quartosOcupadosAtual = quartosOcupados.length;

    let taxaOcupacao = (quartosOcupadosAtual / 20) * 100;

    let totalHospedes = hospedes.length;

    let totalEventos = agendaEventos.length;

    let receitaHospedagem = 0;

    for (let reserva of reservas) {
        receitaHospedagem += reserva.total;
    }

    let receitaEventos = 0;

    for (let evento of agendaEventos) {
        receitaEventos += evento.total;
    }

    let receitaTotal = receitaHospedagem + receitaEventos;

    alert(`📊 RELATÓRIOS OPERACIONAIS
        
INDICADOR                  VALOR

Reservas confirmadas       ${totalReservas}
Quartos ocupados           ${quartosOcupadosAtual}/20
Taxa de ocupação           ${taxaOcupacao.toFixed(2)}%
Hóspedes cadastrados       ${totalHospedes}
Eventos confirmados        ${totalEventos}

💰 RECEITAS

Hospedagem                 R$ ${receitaHospedagem.toFixed(2)}
Eventos                    R$ ${receitaEventos.toFixed(2)}
TOTAL GERAL                R$ ${receitaTotal.toFixed(2)}`);

    inicio();
}