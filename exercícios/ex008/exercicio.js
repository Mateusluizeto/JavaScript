console.log("Resultado do exercício 1:")

const arrayNumber = [1, 2, 3, 4, 5] //  Posição de cada um = 0, 1, 2, 3, 4 
console.log(arrayNumber)

console.log(`O elemento da posição 0 da minha lista é ${arrayNumber[0]}`)
console.log(`O elemento da posição 1 da minha lista é ${arrayNumber[1]}`)
console.log(`O elemento da posição 2 da minha lista é ${arrayNumber[2]}`)
console.log(`O elemento da posição 3 da minha lista é ${arrayNumber[3]}`)
console.log(`O elemento da posição 4 da minha lista é ${arrayNumber[4]}`)

/****************************************************************************/

console.log("Resultado de exercício 2:")
const pokemon = {
    nome: "Pikachu",
    estamina: 50,
    defesa: 75,
    ataque: 150,
    habilidade: "Choque do Trovão"
}

console.log(`Meu objeto pokemon possui nome: ${pokemon.nome}`)
console.log(`Meu objeto pokemon possui estamina: ${pokemon.estamina}`)
console.log(`Meu objeto pokemon possui defesa: ${pokemon.defesa}`)
console.log(`Meu objeto pokemon possui ataque: ${pokemon.ataque}`)
console.log(`Meu objeto pokemon possui habilidade: ${pokemon.habilidade}`)

/****************************************************************************/

console.log("Resultado de exercício 3:")

let num1 = 133
let num2 = 45

// CONTAS
const sum = num1 + num2
console.log(sum)

const sub = num1 - num2
console.log(sub)

const sub2 = num2 - num1
console.log(sub2)

const div = num1 / num2
console.log(div)

const mult = num1 * num2
console.log(mult)

/****************************************************************************/

console.log("Resultado de exercício 4:")

num1 = 33
num2 = 222

/*Operadores de comparação*/
console.log(num1 > num2)
console.log(num2 > num1)

num1 = 88
num2 = 55

/*Operadores de comparação*/
console.log(num1 < num2)


num1 = '123'
num2 = 123
console.log(num1 === num2)
console.log(num1 == num2)