const qualNome = function(nome) {
    console.log(`Seu nome é ${nome}`)
}

qualNome('Mateus')

function qualIdade(idade){
    console.log(`Sua idade é ${idade()}`)
}

qualIdade(
    () => {
        return 17
    }
)

executeiAntes()

function executeiAntes() {
    console.log('O chamado da function está acima')
}