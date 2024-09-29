/*
    Faça um programam que tenha um menu e apresente a seguinte mensagem: 
    
    Olá usuário! Digite o número da opção desejada:

       1. Cadastrar um item na lista
       2. Mostrar itens cadastrados 
       3. Sair do programa 

    ---
    O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes
    cenários: 

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista.
    Caso o usuário digite 2, ele poderá ver os itens cadastrados.
      Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let opcao;
let itens = []
let control = 0

while(opcao != 3) {
    opcao = Number(window.prompt(`Olá usuário! Digite o número da opção desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados 
    3. Sair do programa `))

    if(opcao == 1) {
        itens[control] = window.prompt('Cadastre um item')
    } else if(opcao == 2) {
        if(itens.length == 0){
            window.alert('Não tem itens cadastrados')
        } else{
            window.alert(itens)
    }
    } 
    else{
        window.alert("Tchau")
    }
    console.log(itens, opcao)
    control++
}