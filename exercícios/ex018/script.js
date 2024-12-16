// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// EVENTOS
btnTry.addEventListener("click" , handleTryClick) // Execução da função
btnReset.addEventListener("click", handleResetClick) // Execução da funcão
// Criação da função
// Função callback
function handleTryClick(event){ // Criando uma função para pegar o valor que input quando apertarmos o botão
    event.preventDefault() // Faz com que a página não atualize, pois ela está atualizando porque está dentro de um formulário, Traduzindo essa linha é (Não faça o padrão)

    const inputNumber = document.querySelector("#inputNumber") // O querySelector pega o elemento pela tag que é escrita no css

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen() // Se for display none vira display block e vice versa

        document.querySelector(".screen2 > h2").innerHTML = `Acertou em ${xAttempts} tentativas` // Colocando isso na tela quanndo acertar
    }

    xAttempts++
}

// Eventos

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    inputNumber.value = "" // Quando apertar no tente novamente o input vai ficar vazio
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}