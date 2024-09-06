sayMyName()                   
function sayMyName() {
  console.log("Mateus")
  // Não necessariamente a execução da função precisa ser dps dela 
}

/*----------------------------------------------------------------------------*/
// ERRADO
digaMeuNome()

let digaMeuNome = function() { 
    console.log('Mateus')
} // Já dessa forma não é possivel colocar a execução antes de definir a variavel, pois nesse caso estamos fazendo com uma variável   