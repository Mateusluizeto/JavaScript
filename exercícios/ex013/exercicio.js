/*EXERCICIO 1*/
console.log("Resultado do exercício 1:")
function notas(a, b, c) {
   const mediaNotas = (a + b + c) / 3   
   console.log(`A média desse aluno é ${Number.parseInt(mediaNotas)}`)
}

notas(9, 9, 4)

/*EXERCICIO 2*/
console.log("Resultado do exercício 2:")
function mediaProva(a, b, c) {
    const mediaNotas = (a + b + c) / 3
    return mediaNotas;
}

function mediaProvaFinal(a, b, c, notaFinal) {
    const mediaSemPF = mediaProva(a, b, c)
    const mediaFinal = (mediaSemPF + notaFinal) / 2
    console.log(`A média final desse aluno é ${mediaFinal}`)
}

mediaProvaFinal(4, 5, 2, 10)

/*EXERCICIO 3*/
console.log("Resultado do exercício 3:")
function converterParaFarenheit(temperaturaCelsius) {
    const tempFarenheit = (9/5) * temperaturaCelsius + 32;
    console.log(`A temperatura em Farenheit é ${tempFarenheit}F`)
}

converterParaFarenheit(40)

/*EXERCICIO 4*/
console.log("Resultado do exercício 4:")
function pagarImposto(produto) {
    const valorComimposto = 1.08875 * produto
    console.log(`O valor a ser pago é ${valorComimposto}R$`)
}

pagarImposto(50)