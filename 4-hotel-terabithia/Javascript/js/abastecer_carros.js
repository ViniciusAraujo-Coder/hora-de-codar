function abastecer_carros() {

    const litrosTanque = 42;

    alert(`🏨⛽ HOTEL AURORA - ABASTECIMENTO`);

    let alcoolWayne = Number(prompt(`⛽ Wayne Oil - Preço do álcool:`));

    while (isNaN(alcoolWayne) || alcoolWayne <= 0) {
        alert(`⚠️ Digite um preço válido!`);
        alcoolWayne = Number(prompt(`⛽ Wayne Oil - Preço do álcool:`));
    }

    let gasolinaWayne = Number(prompt(`⛽ Wayne Oil - Preço da gasolina:`));

    while (isNaN(gasolinaWayne) || gasolinaWayne <= 0) {
        alert(`⚠️ Digite um preço válido!`);
        gasolinaWayne = Number(prompt(`⛽ Wayne Oil - Preço da gasolina:`));
    }

    let alcoolStark = Number(prompt(`⛽ Stark Petrol - Preço do álcool:`));

    while (isNaN(alcoolStark) || alcoolStark <= 0) {
        alert(`⚠️ Digite um preço válido!`);
        alcoolStark = Number(prompt(`⛽ Stark Petrol - Preço do álcool:`));
    }

    let gasolinaStark = Number(prompt(`⛽ Stark Petrol - Preço da gasolina:`));

    while (isNaN(gasolinaStark) || gasolinaStark <= 0) {
        alert(`⚠️ Digite um preço válido!`);
        gasolinaStark = Number(prompt(`⛽ Stark Petrol - Preço da gasolina:`));
    }


    let melhorCombustivelWayne;
    let precoWayne;

    if (alcoolWayne <= gasolinaWayne * 0.70) {
        melhorCombustivelWayne = "Álcool";
        precoWayne = alcoolWayne;
    } else {
        melhorCombustivelWayne = "Gasolina";
        precoWayne = gasolinaWayne;
    }

    let melhorCombustivelStark;
    let precoStark;

    if (alcoolStark <= gasolinaStark * 0.70) {
        melhorCombustivelStark = "Álcool";
        precoStark = alcoolStark;
    } else {
        melhorCombustivelStark = "Gasolina";
        precoStark = gasolinaStark;
    }

    let totalWayne = precoWayne * litrosTanque
    let totalStark = precoStark * litrosTanque

    alert(`⛽ RESULTADO DO ABASTECIMENTO

Wayne Oil:
Melhor opção = ${melhorCombustivelWayne} | Total (42L) = R$ ${totalWayne.toFixed(2)}

Stark Petrol:
Melhor opção = ${melhorCombustivelStark} | Total (42L) = R$ ${totalStark.toFixed(2)}`);

    if (totalWayne < totalStark) {
        alert(`${usuario}, é mais barato abastecer com ${melhorCombustivelWayne.toLowerCase()} no posto Wayne Oil.
💵 R$${totalWayne}.`);

    } else if (totalStark < totalWayne) {
        alert(`${usuario}, é mais barato abastecer com ${melhorCombustivelStark.toLowerCase()} no posto Stark Petrol.
💵 R$${totalStark}.`);

    } else {
        alert(`${usuario}, os dois postos possuem o mesmo custo de abastecimento.
💵 R$${totalStark}.`);
    }

    inicio();
}