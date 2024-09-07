//Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um nove array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero um carro!'
let myArray = phrase.split(" ") // transforma em um array que separa cada palavra
let phraseWithUnderline = myArray.join('_') // coloca entre cada palavra um underline
console.log(phraseWithUnderline)
// Resultado: Eu_quero_um_carro!
