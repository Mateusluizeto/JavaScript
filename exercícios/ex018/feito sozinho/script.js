// VARIAVEIS
const tela1 = document.querySelector("#telaInicial")
const tela2 = document.querySelector("#tentarNovamente")
const inputNumber = document.querySelector("input")
const buttonTentar = document.querySelector("#tentar")
const buttonJogarNovamente = document.querySelector("#jogarNovamente")

let tentativas = 1

let randomNumber = Math.round(Math.random() * 10)

// Execução das funções
buttonTentar.addEventListener("click", tentar)
buttonJogarNovamente.addEventListener("click", jogarNovamente)

function tentar(event){
    event.preventDefault() // Não seguir o padrão
    if(Number(inputNumber.value) == randomNumber){
        tela1.classList.add("hide") 
        tela2.classList.remove("hide")

        document.querySelector("h2").innerHTML = `Acertou em ${tentativas} tentativas`
    }
 tentativas++
}

function jogarNovamente(){
        tela1.classList.remove("hide")
        tela2.classList.add("hide")
        tentativas = 1
        inputNumber.value = ""
        novoNumero() // sempre que eu clicar em jogar novamente ele vai criar um número aleatório novo
}

function novoNumero(){
   return randomNumber = Math.round(Math.random() * 10) // funcao pra criar um umero aleatório novo
}


