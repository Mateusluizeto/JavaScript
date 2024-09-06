// callback function

function sayMyName(name) {
    console.log('Antes da função callback')
    name()// função que está dentro do parametro name
    console.log('Depois da função callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
) //Podemos colocar functions dentro de functions