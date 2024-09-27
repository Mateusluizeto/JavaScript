let itens = []

let item = 0
while(item < 10) {
    itens[item] = window.prompt(`Qual é o item ${item + 1}?`)
     item++
}

window.alert(itens)