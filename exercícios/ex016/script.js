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

let option;
let position = 0
let items = []; // A lista de itens que a pessoa vai cadastrar

while(option != 3){
   option = Number(window.prompt(`Olá usuário! Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados 
3. Sair do programa 
`));

    switch(option){
        case 1: 
        let item = window.prompt("Digite o nome do item:")
        items.push(item)
            break // para mostrar que o caso 1 acabou
        case 2: 
        
        if(items.length == 0){
            window.alert("Não existem itens cadastrados")
        } else{
            window.alert(items) // Vai mostrar quais itens nós cadastramos
        }
            break // Para mostrar que o caso 2 acabou
        case 3:
            window.alert("Tchau")
            break
        default: // Vai fazer isso se não tiver 1 nem 2
        window.alert("Opção inválida, tente novamente")
          
    }
}

    /* MESMO CÓGIDO ACIMA POREM USANDO IF ELSE
    
    if(option == 1){ // Cadastrar um item na lista
        items[position] = window.prompt("Digite o nome do item:")
    }
     else if(option == 2){ // Ver os itens cadastrados
    
        if(items.length == 0){
            window.alert("Não existem itens cadastrados")
        } else{
            window.alert(items) // Vai mostrar quais itens nós cadastramos
        }
    
    } else {
        window.alert("Tchau")
    }
    
    console.log(items, option)
    position++
}
*/
