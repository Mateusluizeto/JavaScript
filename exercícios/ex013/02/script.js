/*
    Capturar dois números e fazer as operaações matemáticas 
    de soma, subtração, multiplicação, divisão e resto da divisão

    E para cada operação mostrar um alerta com o resultado
*/

let firstNumber = Number(window.prompt("Digite o primeiro número"))
let secondNumber = Number(window.prompt("Digite o segundo número"))

const sum = firstNumber + secondNumber 
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

window.alert(`Soma: ${sum}`)
window.alert(`Subtração: ${sub}`)
window.alert(`Multiplicação: ${multi}`)
window.alert(`Divisão: ${div}`)
window.alert(`Resto da divisão: ${restDiv}`)
