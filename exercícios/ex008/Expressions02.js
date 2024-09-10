/*
    new
    * left-hand-side expression
    * Criar um novo objeto
    O new faz com que o elemento se torne um novo objeto
*/

let nome = new String('Mateus') // Nova string criada

nome.surName = 'Luizeto'
let age = new Number(23) // Novo number criado

console.log(nome)
/* Resultado 
String {'Mateus', surName: 'Luizeto'}
*/

console.log(nome[2])
// Resultado: t (Pois o new transforma o elemento em um objeto)
