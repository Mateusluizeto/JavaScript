//Manipulando Strings e Números

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 132.23093498
console.log(number.toFixed(2).replace("." , ","))
//O replace serve para nós trocarmos o . pela , . Sendo o segundo elemento o que nós queremos tirar, e o segundo qual nós queremos colocar 
// Resultado: 132,23