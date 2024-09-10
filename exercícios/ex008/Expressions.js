/*
    Operadores unários
    typeof
    delete
*/

console.log(typeof 'Mateus') // Resultado: String

const person = {
    nome: 'Lucas',
    idade: '17'
}

delete person.idade // Vai deletar a idade do lucas
console.log(person) // Resultado: {nome: 'Lucas'}

