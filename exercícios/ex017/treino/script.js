const nome = window.prompt('Qual é o seu nome?')
let bim1 = Number(window.prompt(`${nome}, qual é sua nota do primeiro bimestre?`))
let bim2 = Number(window.prompt(`${nome}, qual é sua nota do segundo bimestre?`))
let bim3 = Number(window.prompt(`${nome}, qual é sua nota do terceiro bimestre?`))
let soma = bim1 + bim2 + bim3
let media = soma / 3

if(media >= 6) {
    window.alert(`Sua média é ${media}, Parabens voce passou!!`)
} else {
    window.alert(`Sua média é ${media}, Voce precisa estudar mais ):`)
}

console.log(bim1, bim2, bim3, soma, media)