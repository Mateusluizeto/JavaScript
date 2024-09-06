let subject  // <--

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject) // <--

/*
Resultado: undefined
study
study

Esse undefined acontece pois antes da function ser executada, nós não atribuimos nenhum valor para ela, mas depois de ser executada ela ganha o valor de 'study'
*/