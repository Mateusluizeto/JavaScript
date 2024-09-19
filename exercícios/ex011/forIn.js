// for..in

let person = {
    nome: 'Mateus',
    idade: 17,
    peso: 70.5
}

for(let property in person){
    console.log(property) // Resultado: nome idade peso
    console.log(person[property]) // Resultado: nome Mateus idade 17 peso 70.5
}