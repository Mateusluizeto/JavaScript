const listaNotas = [ // Esses são bloccos dentro do array
    { nome: 'Daniel', nota: 5 },
    { nome: 'Pedro' , nota: 15 },
    {nome: 'Lucas' , nota: 12},
    {nome: 'Fabrício' , nota: 16},
    {nome: 'Izabelle' , nota: 18},
    {nome: 'Nathalia' , nota: 20},
    {nome: 'Mateus' , nota: 12},
    {nome: 'Sergio' , nota: 13},
    {nome: 'Diogo' , nota: 14},
    {nome: 'Renan' , nota: 11},,
    {nome: 'Rodrigo' , nota: 9},
    {nome: 'Messi' , nota: 0},
    {nome: 'CR7' , nota: 0},
]

//filter: Método responsável por gerar um novo array resultado de um filtro estabelecido pelo programador
const alunosAprovados = listaNotas.filter(function(aluno) {
    return aluno.nota >= 12 // Essa function vai fazer com que apareça apenas alunos que tiveram uma nota maior ou igual a 12
})
console.log(alunosAprovados)

// find: Método responsável por mostrar apenas os que eu quiser, oque eu colocar na função vai ser oque vai aparecer, mas quando aparecer o primeiro ele vai parar de procurar, diferentemente do filter
const alunoQuetirouZero = listaNotas.find(function (aluno){
    return aluno.nota === 0;
});
console.log(alunoQuetirouZero)

//map Esse método vai pegar apenas os dos tipos de dados que a gente quiser, nesse caaso ele vai pegar apenas os nomes das pessoas que tiraram mais que 12 

const listaNomesAlunosAprovados = alunosAprovados.map(function(aluno){ // alunos aprovados ja está calculado la em cima
    return aluno.nome
})

console.log(listaNomesAlunosAprovados)


