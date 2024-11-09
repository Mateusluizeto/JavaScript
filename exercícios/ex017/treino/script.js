/*
    Capture 10 itens para compor a lista de um supermercado.

    Após capturar os 10 itens, imprima-os separando por vírgula.
*/
let itens = []
let control = 0
while(control < 10) {
  itens[control] = window.prompt(`Qual é o item ${control + 1}?`)
  control++
}

window.alert(itens)