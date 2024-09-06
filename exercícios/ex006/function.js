/*
Function() constructor

*Expressão new
*criar um novo objeto
*this keyword
*/

function Person(name){
    this.name = name // this é a variavel mateus que está fora do escopo
    this.walk = function(){
        return this.name + ' Andando'
    }
}
const mateus = new Person('Mateus') // Dessa forma a variavel vira uma objeto
const joao = new Person('João')
console.log(mateus.walk())
console.log(joao.walk())