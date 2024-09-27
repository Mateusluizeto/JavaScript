/*
    **Jogo da advinhação**
    
    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie um lógica para gerar um número aleatório e
    verificar se o número digitado é o mesmo que o aleatório gerado 
    pelo sistema.

    Enquanto o usuário não advinhar o número, mostrar a mensagem: 
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o x da mensagem, pelo o número de tentativas 
*/

let result = window.prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10) // Função usada para gerar número aleatórios entre 0 e 10
const match = Number(result) != randomNumber // Conferir se o número é diferente
let xAttempts = 1

while(match) { // Enquanto for falso você vai tentar novamente
   result = prompt("Erro, tente novamente:")
   xAttempts++ // Adcionar mais 1 no numero de tentativas
}

alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas`)

console.log(randomNumber)
