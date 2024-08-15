let dados = {
    nome: 'Mateus',
    idade: 17,
    sexo: 'masculino'
}
console.log(`O nome do ususario é ${dados.nome}, o usuario tem ${dados['idade']} anos, o sexo do usuario e ${dados['sexo']}`) 

dados.nome = 'Nicolly'
dados.idade = 16
dados.sexo = 'feminino'

console.log(`O nome do ususario é ${dados.nome}, o usuario tem ${dados['idade']} anos, o sexo do usuario e ${dados['sexo']}`)

/*ARRAYS*/

let anos = [2007, 2008, 2024]

console.log(`A nicoly nasceu em ${anos[1]}`)
console.log(`O Mateus nasceu em ${anos[0]}`)
console.log(`O ano atual é ${anos[2]}`)