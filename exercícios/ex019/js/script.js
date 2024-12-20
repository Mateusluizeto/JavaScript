import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {CalculateIMC, notNumber} from './utils.js'
 
// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector(".modal button.close")

form.onsubmit = (event) => { // Função que vai ser executada quando o submit for clicado 
    event.preventDefault() // impede o comportamento padrão (recarregar a página)
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrheightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrheightIsNotANumber){
        AlertError.open()
        return // Faz com que o resto da função pare quando o if for executado
    }

    AlertError.close()

    const result = CalculateIMC(weight, height)
    displayResultMessage(result)
}


function displayResultMessage(result){
 const message = `Seu IMC é de ${result}`

    Modal.message.innerHTML = message
    Modal.open()
}

// Fechar a janela de erro ao digitar no campo
// o evento é de nome input

inputWeight.oninput = () => {AlertError.close()} // Se eu estiver alterando alguma coisa no input ele vai executar essa função
inputHeight.oninput = () => {AlertError.close()}