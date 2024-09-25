/*
    Capture 10 itens para compor a lista de um supermercado.

    Após capturar os 10 itens, imprima-os separando por vírgula.
*/

let items = []; // Espaço aonde vamos colocar nossos itens
for(let item = 0; item < 10; item++) {
  itemName = window.prompt(`Qual é o item ${item + 1}`) // Vai repetir essa instrução 10 vezes
  items[item] = itemName // Usando a variavel que vai de 1 ate 10 em nosso favor, para colocar cada item em sua posição no array
}

window.alert(items)

/*
----------------------------------------------------------------------------------------------------------
let item = 1
while(item <= 10){                       Essa também é uma forma de fazer a estrutura de repetição
    window.prompt(`Qual ${item}?`)
    item++
}
----------------------------------------------------------------------------------------------------------
*/