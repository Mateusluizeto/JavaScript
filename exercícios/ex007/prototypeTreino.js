let arra = [26, 'Mateus', true, 34]
console.log(typeof(arra[2])) // mostrou o tipo do elemento 2
arra.push('João') // adicionou no final
arra.unshift(false) // adicionou no inicio
console.log(arra)
arra.pop() // Remove o ultimo item
arra.shift() // Remove o primeiro item
console.log(arra)
console.log(`O array tem ${arra.length} elementos`)

let frase = 'Eu quero um computador'
var arrayFrase = frase.split(" ") // Tranformando a frase em um array

let separarPorUnderline = arrayFrase.join('_') // junta todos os elementos do array em uma frase e separa os elementos por um underline

console.log(separarPorUnderline)

console.log(arra.indexOf('Mateus')) // ver em qual posição do array esta o elemento 'Mateus'

let verificarSeTemOElemento = 'Eu gosto de andar de'
console.log(verificarSeTemOElemento.includes('gosto')) // Aqui ele está verificando se tem o elemento 'gosto' na minha variável
//Resultado: true