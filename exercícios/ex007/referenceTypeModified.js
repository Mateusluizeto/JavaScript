const cartao1 = {
    nome: 'Daniel Porto',
    saldo: 10000000
}

const cartao2 = cartao1 // cartão1 e cartão2 são a mesma coisa, logo eles estão apontando paraa o mesmo objeto

console.log(cartao1)
console.log(cartao2)

cartao2.saldo = cartao2.saldo - 2000000 // Mesmo fazendo essa mudança apenas no cartao2, o cartão 1 também vai mudar, pois é como se fosse uma copia

console.log(cartao1)
console.log(cartao2)

const listaAlunos = ['Daniel', 'Lira', 'Alon']
listaAlunos[3] = 'Mateus'
console.log(listaAlunos)