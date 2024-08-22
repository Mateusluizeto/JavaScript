let a = 2.0000001

console.log(a.toFixed(5))
console.log(a.toString())

let b = 'Texto de texto'
console.log(b.length)
console.log(b.toLocaleUpperCase())
console.log(b.charAt(6))
console.log(b.concat(' Concatenei mané'))

const notas = [
    {nome: 'Mateus', nota: 10},
    {nome: 'Nicolly', nota: 9},
    {nome: 'Ana' , nota: 9.5},
    {nome: 'Luis', nota: 0},
    {nome: 'Julia', nota: 0},
    {nome: 'Gabriel', nota: 7.5}
]

const alunosPassaraam = notas.filter(
    function(aluno){
        return aluno.nota > 9
    }
)
console.log(alunosPassaraam)

const alunosCom0 = notas.find(
    function(aluno){
        return aluno.nota === 0
    }
)
console.log(alunosCom0)   

const nomeDosAlunosQuePassaram = alunosPassaraam.map(
    function(aluno){
        return aluno.nome
    }
)

console.log(nomeDosAlunosQuePassaram)
