function calculateSquareRoot(radicand) { // Função para tirar a raiz quadrada
return radicand ** (1/2);
}

function calculatePythagoras(side1, side2) { // cateto oposto e catero adjacente
const sum = (side1 ** 2) + (side2 ** 2) 
return calculateSquareRoot(sum)
}

console.log(`O resultado do teorema é ${calculatePythagoras(3, 4)}`)