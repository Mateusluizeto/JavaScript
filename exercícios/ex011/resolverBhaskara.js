// RESOLVER BHASKARA

function resolverBhaskara(a, b, c/*Parametros que vamos usar na function*/) {
    const delta = b**2 - 4*a*c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2*a); //Conta da Bhaskara
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2*a);
    
    console.log(`Os dois valores de X dos pontos da parábola no eixo X ${x1} e ${x2}`)
}

function calcularRaizQuadrada(base) {
    return base ** (1 / 2)
}

resolverBhaskara(2, 3, -2)