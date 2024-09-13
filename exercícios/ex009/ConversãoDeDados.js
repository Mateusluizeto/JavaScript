/*
    Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)



/* 
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (Condicionais e loops)

    false
    0
    -0
    ""                QUALQUER UM DESSES QUE EU COLOCAR NO OPERADOR TERNÁRIO ABAIXO VAI RETORNAR RESULTADO FALSO
    null
    undefined
    NaN
*/

console.log( NaN ? 'Verdadeiro' : 'Falso') // Resultado: Falso

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um boleano é obrigatório (Condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( {} ? 'Verdadeiro' : 'Falso') // Resultado: Verdadeiro
