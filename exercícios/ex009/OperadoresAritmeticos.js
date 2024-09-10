// Operador Condicional (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não tiver valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

// Maior de 18
let age = 18
const canDrive = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir'
console.log(canDrive)