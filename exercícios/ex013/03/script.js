/*
    Solicitar o nome do aluno e as três notas
    dos bimestres e calcular a média daquele aluno.

    Se o aluno passou no bimestre, dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno 
    a dar seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

    const nome = window.prompt("Qual é o seu nome?")

    let bim1 = Number(window.prompt(`${nome}, qual foi sua nota no primeiro bimestre?`))
    let bim2 = Number(window.prompt(`${nome}, qual foi sua nota no segundo bimestre?`))
    let bim3 = Number(window.prompt(`${nome}, qual foi sua nota no terceiro bimestre?`))
    let soma = bim1 + bim2 + bim3
    let media = soma / 3
    
    if(media >= 6){
        window.alert(`PARABENS ${nome}, sua média é: ${media.toFixed(1)}`)
    } else {
        window.alert(`Estude um pouco mais ${nome}, seu média foi ${media.toFixed(1)}`)
    }