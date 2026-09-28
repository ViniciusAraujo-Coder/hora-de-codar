function arCondcionado() {
    let empresasOrcamento = [];

    alert('🏨❄️ HOTEL AURORA - AR-CONDICIONADO');

    while(true){

        let empresaArCondicionado = prompt(`🏢 Empresa: `).trim().toLowerCase();
    
        while (empresaArCondicionado == "" || !isNaN(empresaArCondicionado)) {
    
            alert(`🥵 Por favor digite um nome válido para a empresa de Ar-Condicionado! ${usuario}.`);
    
            empresaArCondicionado = prompt(`🏢 Empresa: `).trim().toLowerCase();
        }
    
        let valorAparelho = Number(prompt(`🧰 Valor por aparelho: `));
    
        while (isNaN(valorAparelho) || valorAparelho <= 0) {
    
            alert(`⚠️ Digite um valor válido!`);
    
            valorAparelho = Number(prompt(`🧰 Valor por aparelho: `));
        }
    
        let quantidadeAparelhos = parseInt(prompt(`❄️ Quantidade de aparelhos em manutenção: `));
    
        while (isNaN(quantidadeAparelhos) || quantidadeAparelhos < 1) {
    
            alert(`⚠️ Digite uma quantidade válida!`);
    
            quantidadeAparelhos = parseInt(prompt(`❄️ Quantidade de aparelhos: `));
        }
    
        let desconto = Number(prompt(`📉 Desconto (%): `));
    
        while (isNaN(desconto) || desconto < 0 || desconto > 100) {
    
            alert(`⚠️ Digite um desconto entre 0 e 100%!`);
    
            desconto = Number(prompt(`📉 Desconto (%): `));
        }
    
        let minimoDesconto = parseInt(prompt(`📦 Mínimo para desconto: `));
    
        while (isNaN(minimoDesconto) || minimoDesconto < 1) {
    
            alert(`⚠️ Digite uma quantidade válida!`);
    
            minimoDesconto = parseInt(prompt(`📦 Mínimo para desconto: `));
        }
    
        let deslocamento = Number(prompt(`🚚 Valor de deslocamento: `));
    
        while (isNaN(deslocamento) || deslocamento < 0) {
    
            alert(`⚠️ Digite um valor válido!`);
    
            deslocamento = Number(prompt(`🚚 Valor de deslocamento: `));
        }

        let totalOrcamento;

        if (quantidadeAparelhos >= minimoDesconto) {

            totalOrcamento = (valorAparelho * quantidadeAparelhos) * (1 - desconto / 100) + deslocamento;

        } 
        
        else {
            totalOrcamento = (valorAparelho * quantidadeAparelhos) + deslocamento;
        }

        alert(`💸 O total do orçamento pela empresa ${empresaArCondicionado} é: R$${totalOrcamento}.`)

        empresasOrcamento.push({
            empresaArCondicionado: empresaArCondicionado,
            totalOrcamento: totalOrcamento
        });

        let resposta = prompt(`Deseja informar novos dados, ${usuario}? (S/N)`).trim().toUpperCase();

        while (resposta != "N" && resposta != "S"){
            alert(`⚠️ Digite uma resposta válida! (S/N): `);
            resposta = prompt(`Deseja informar novos dados, ${usuario}?`).trim().toUpperCase();
        }

        if (resposta == "N"){
            break;
        }

    }

    let menorOrcamento = empresasOrcamento[0];
    let maiorOrcamento = empresasOrcamento[0];

    for (let i = 1; i < empresasOrcamento.length; i++) {

        if (empresasOrcamento[i].totalOrcamento < menorOrcamento.totalOrcamento) {
            menorOrcamento = empresasOrcamento[i];
        }

        if (empresasOrcamento[i].totalOrcamento > maiorOrcamento.totalOrcamento) {
            maiorOrcamento = empresasOrcamento[i];
        }
    }

    let diferencaPercentual =
    ((maiorOrcamento.totalOrcamento - menorOrcamento.totalOrcamento)
    / menorOrcamento.totalOrcamento) * 100;

    alert(`❄️ RESULTADO DOS ORÇAMENTOS

MENOR ORÇAMENTO
🏢 Empresa: ${menorOrcamento.empresaArCondicionado}
💰 Valor: R$ ${menorOrcamento.totalOrcamento.toFixed(2)}

MAIOR ORÇAMENTO
🏢 Empresa: ${maiorOrcamento.empresaArCondicionado}
💰 Valor: R$ ${maiorOrcamento.totalOrcamento.toFixed(2)}

📊 DIFERENÇA PERCENTUAL: ${diferencaPercentual.toFixed(2)}%`);

    inicio();
}
