const primeraVariavelDoCodigo = "Texto inicial"

// Se a variavel que esta dentro da function for apagada, ele vai procurar ela no escopo global, ou seja a de cima
function printToConsole() {
    const primeraVariavelDoCodigo = "Segundo texto"
    function secondFunction(){
        const primeraVariavelDoCodigo = "terceiro texto" // E se essa variavel for excluida, ela vari procurar a varial que esta 1 nivel acima dela (em questão de escopo)
        console.log(primeraVariavelDoCodigo)
    }
    console.log(primeraVariavelDoCodigo)
    secondFunction();
}

printToConsole()