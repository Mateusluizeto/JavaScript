let casa = {
    cor: 'white',
    sala: 15, /*Tamanho em metros quadrados*/
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanhoDaCasaEmM2: function() { //Não é necessario parâmetro pois o function ja está dentro da variavel que está com todos os dados
        const tamanhoTotal = this.sala + casa.cozinha + this.banheiro + casa.quarto //podemos colocar this para apontar o dado e colocar o nome dele
    console.log(`O tamanho da casa é ${tamanhoTotal} metros quadrados`) 
    return tamanhoTotal
    }
}
casa.calcularTamanhoDaCasaEmM2()

/**********************************************************************************************************************************************/

function calcularTamanhoDaCasaEmM2(tamanhoSala, tamanhoCozinha, tamanhoBanheiro, tamanhoQuarto) { // é necessário parâmetro pois a function não está dentro da variavel que está com todos os dados
    const tamanhoTotal = tamanhoSala + tamanhoQuarto + tamanhoCozinha + tamanhoBanheiro
    console.log(`O tamanho da casa é ${tamanhoTotal} metros quadrados`) 
    return tamanhoTotal
}

calcularTamanhoDaCasaEmM2(casa.sala, casa.cozinha, casa.banheiro, casa.quarto)
