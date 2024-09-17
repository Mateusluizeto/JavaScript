// throw (Disparar,  lançar)

function sayMyName(name = '') {
 if(name === ''){
    throw 'Nome é obrigatório' // o  throw quando é executado, ele não executa o resto da função
 }
 console.log(name)
}

// try...catch (tentar, pegar)

try{
    sayMyName() // Se colocarmos um nome aqui, ele nao vai dar erro
} catch(e) { //throw === e
 console.log(e) // Execução se não tiver nenhum nome
}