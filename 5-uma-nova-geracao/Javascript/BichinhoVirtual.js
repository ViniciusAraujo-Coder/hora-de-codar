class BichinhoVirtual {

    constructor(nome) {
        this.nome = nome;
        this.nivelDeFome = 50;
        this.nivelFelicidade = 50;
        this.nivelCansaco = 0;
        this.nivelSujeira = 0;
        this.nivelIdade = 0;
    }

    resetar(nome) {
        this.nome = nome;
        this.nivelDeFome = 50;
        this.nivelFelicidade = 50;
        this.nivelCansaco = 0;
        this.nivelSujeira = 0;
        this.nivelIdade = 0;
    }

    alimentar() {
        this.nivelDeFome -= 10;
    }

    brincar() {
        this.nivelFelicidade += 10;
        this.nivelCansaco += 10;
    }

    descansar() {
        this.nivelCansaco -= 50;
    }

    darBanho() {
        this.nivelSujeira -= 50;
    }

    passarTempo() {
        this.nivelDeFome += 3;
        this.nivelFelicidade -= 3;
        this.nivelCansaco += 10;
        this.nivelSujeira += 5;
        this.nivelIdade += 1;

        limitarValores();
        verificarResultado();
    }
}


alert("Bem-vindo ao Simulador de Animal de Estimação Virtual!");

const nomePet = prompt("Digite o nome do seu animal de estimação:") || "Baltazar Guilherme Tenório";
const pet = new BichinhoVirtual(nomePet);


document.getElementById("nomePet").textContent = pet.nome;


function atualizarValores() {
    document.getElementById("fome").textContent = pet.nivelDeFome;
    document.getElementById("felicidade").textContent = pet.nivelFelicidade;
    document.getElementById("cansaco").textContent = pet.nivelCansaco;
    document.getElementById("sujeira").textContent = pet.nivelSujeira;
    document.getElementById("idade").textContent = pet.nivelIdade;

    atualizarCores();
}


function novoBichinho() {

    const nome = prompt("Digite o nome do seu novo bichinho:") || "Novo Pet";

    pet.resetar(nome);

    document.getElementById("nomePet").textContent = pet.nome;
    document.getElementById("img").src = "pet.jpg";

    atualizarValores();
}


function verificarResultado() {

    if (
        pet.nivelDeFome >= 100 ||
        pet.nivelCansaco >= 100 ||
        pet.nivelFelicidade <= 0 ||
        pet.nivelSujeira >= 100
    ) {
        document.getElementById("img").src = "petDerrota.jpg";

        alert("Seu pet morreu tadinho dele");

        if (confirm("Deseja começar com um novo bichinho?")) {
            novoBichinho();
        }

        return;
    }


    if (pet.nivelIdade >= 50) {

        alert("Você venceu!");

        if (confirm("Deseja começar com um novo bichinho?")) {
            novoBichinho();
        }
    }
}


function limitarValores() {
    pet.nivelDeFome = Math.max(0, Math.min(100, pet.nivelDeFome));
    pet.nivelFelicidade = Math.max(0, Math.min(100, pet.nivelFelicidade));
    pet.nivelCansaco = Math.max(0, Math.min(100, pet.nivelCansaco));
    pet.nivelSujeira = Math.max(0, Math.min(100, pet.nivelSujeira));
}


const botaoAlimentar = document.getElementById("alimentar");

botaoAlimentar.addEventListener("click", function() {
    pet.alimentar();
    pet.passarTempo();
    atualizarValores();
});


const botaoBrincar = document.getElementById("brincar");

botaoBrincar.addEventListener("click", function() {
    pet.brincar();
    pet.passarTempo();
    atualizarValores();
});


const botaoDescansar = document.getElementById("descansar");

botaoDescansar.addEventListener("click", function() {
    pet.descansar();
    pet.passarTempo();
    atualizarValores();
});


const botaoDarBanho = document.getElementById("darBanho");

botaoDarBanho.addEventListener("click", function() {
    pet.darBanho();
    pet.passarTempo();
    atualizarValores();
});


function atualizarCores() {

    const fome = document.getElementById("fome");
    const felicidade = document.getElementById("felicidade");
    const cansaco = document.getElementById("cansaco");
    const sujeira = document.getElementById("sujeira");

    fome.className = "normal";
    felicidade.className = "normal";
    cansaco.className = "normal";
    sujeira.className = "normal";


    if (pet.nivelDeFome >= 60) {
        fome.className = "atencao";
    }

    if (pet.nivelDeFome >= 70) {
        fome.className = "perigo";
    }


    if (pet.nivelFelicidade <= 30) {
        felicidade.className = "atencao";
    }

    if (pet.nivelFelicidade <= 10) {
        felicidade.className = "perigo";
    }


    if (pet.nivelCansaco >= 50) {
        cansaco.className = "atencao";
    }

    if (pet.nivelCansaco >= 80) {
        cansaco.className = "perigo";
    }


    if (pet.nivelSujeira >= 60) {
        sujeira.className = "atencao";
    }

    if (pet.nivelSujeira >= 80) {
        sujeira.className = "perigo";
    }
}


atualizarValores();
