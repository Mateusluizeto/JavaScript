// Manipulando Arrays

let techs = ['html' , 'css' , 'js']

// ADICIONAR UM ITEM NO FIM
techs.push('nodejs') // adicionar um elemento no final do array

// ADCIONAR NO COMEÇO
techs.unshift('sql') // adicionar um elemento no inicio do array

// REMOVER DO FIM
techs.pop() // remover o ultimo item , sem precisar colocar alguma coisa entre os paranteses

// REMOVER DO COMEÇO
techs.shift()// remover o primeiro item, sem precisar colocar alguma coisa entre os paranteses

// PEGAR SOMENTE ALGUNS ELEMENTOS DO ARRAY
console.log(techs.slice(1, 3))// Vai cortar o elemento numero 1 até o elemento número 3 Resultado: 'css', 'js'


// REMOVER UM OU MAIS ITENS DE QUALQUER POSIÇÃO DO ARRAY

techs.splice(1, 1) // Primeiro número: Qual posição eu vou começar a tirar. Segundo número: Quantas vezes eu vou tirar algum elemento depois so que eu selecionei usando o primeiro número

// ENCONTRAR A POSIÇÃO DE UM ELEMENTO NO ARRAY 

console.log(techs.indexOf('css'))
console.log(techs)