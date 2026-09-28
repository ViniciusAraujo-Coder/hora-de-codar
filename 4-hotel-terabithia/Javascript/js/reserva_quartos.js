function reserva_quartos() {
    alert('🏨 HOTEL AURORA - RESERVA DE QUARTOS');

    let valorDiaria = parseFloat(prompt(`💵 Informe o valor da diária: `));

    while(isNaN(valorDiaria) || valorDiaria <= 0){
        alert(`Por favor informe o valor da diária.`);
        valorDiaria = parseFloat(prompt(`💵 Informe o valor da diária: `));
    }

    let quantidadeDias = parseInt(prompt(`🕒 Informe a quantidade de diárias (1-30):`));

    while(isNaN(quantidadeDias) || quantidadeDias < 1 || quantidadeDias > 30 ){
        alert(`Valor inválido, ${usuario}. Digite a quantidade de dias entre 1 a 30.`);
        quantidadeDias = parseInt(prompt(`🕒 Ìnforme a quantidade de diárias (1-30):`));
    }

    let nomeHospede = prompt(`👤 Informe o nome do hóspede: `).trim();

    while (nomeHospede == "" || !isNaN(nomeHospede)){
        alert(`Digite o nome do hóspede por favor, ${usuario}`);
        nomeHospede = prompt(`👤 Informe o nome do hóspede: `).trim();
    }

    let tipoQuarto = prompt(`🛏️ Tipo de quarto (S/E/L): `).toUpperCase().trim();

    while(tipoQuarto != "S" && tipoQuarto != "E" && tipoQuarto != "L"){
        alert(`🛏️ Tipo de quarto inválido, ${usuario}.`);
        tipoQuarto = prompt(`Tipo de quarto (S/E/L): `).toUpperCase().trim();
    }

    let numeroQuarto = parseInt(prompt(`Escolha um quarto (1-20): `));

    while(
        isNaN(numeroQuarto) ||
        numeroQuarto < 1 ||
        numeroQuarto > 20 ||
        quartosOcupados.includes(numeroQuarto)
    ){
        if(quartosOcupados.includes(numeroQuarto)){
            alert(`O quarto ${numeroQuarto} está ocupado, ${usuario}!`);

            let quartosLivres = [];

            for(let quarto = 1; quarto <= 20; quarto++){
                if (!quartosOcupados.includes(quarto)){
                    quartosLivres.push(quarto);
                }
            }

            alert(`Quartos disponíveis: ${quartosLivres.join(", ")}`);
        }
        else{
            alert(`Valor inválido, ${usuario}.`);
        }

        numeroQuarto = parseInt(prompt(`Escolha um quarto (1-20): `));
    }

    let fatorTipoQuarto;

    switch(tipoQuarto){
        case "S":
            fatorTipoQuarto = 1.00;
            break;
        case "E":
            fatorTipoQuarto = 1.35;
            break;
        case "L":
            fatorTipoQuarto = 1.65;
            break;
    }

    let valoraPagar = valorDiaria * quantidadeDias * fatorTipoQuarto;
    let taxaServico = valoraPagar * 0.10;

    alert(`💵 VALOR A PAGAR:

🛏️ CUSTOS DE QUARTO - R$${valoraPagar}.
🛠️ TAXA DE SERVIÇO - R$${taxaServico}.

🛎️💵 TOTAL - R$${valoraPagar + taxaServico}`);

    let confirma = prompt(`Deseja confirmar a reserva? (S/N)`).toUpperCase().trim();

    while(confirma != "S" && confirma != "N"){
        alert(`Opção inválida, ${usuario}. Digite S para confirmar ou N para cancelar.`);
        confirma = prompt(`Deseja confirmar a reserva? (S/N)`).toUpperCase().trim();
    }

    if(confirma == "S"){
        reservas.push({
            valorDiaria: valorDiaria,
            quantidadeDias: quantidadeDias,
            nomeHospede: nomeHospede,
            tipoQuarto: tipoQuarto,
            numeroQuarto: numeroQuarto,
            total: valoraPagar + taxaServico
        });

        quartosOcupados.push(numeroQuarto);

        alert(`Reserva confirmada, ${usuario}!`);
        mostrarMapaQuartos();
    }
    else{
        alert(`Reserva cancelada, ${usuario}.`);
    }

    inicio();
}

function mostrarMapaQuartos(){
    let mapa = "";

    for(let quarto = 1; quarto <= 20; quarto++){

        if(quartosOcupados.includes(quarto)){
            mapa += `[${String(quarto).padStart(2, "0")}: O] `;
        }
        else{
            mapa += `[${String(quarto).padStart(2, "0")}: L] `;
        }

        if(quarto % 5 == 0){
            mapa += "\n";
        }
    }

    alert(`🏨 MAPA DE QUARTOS

${mapa}
L = Livre | O = Ocupado`);
}
