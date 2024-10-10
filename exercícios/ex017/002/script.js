/*
  Dada um lista de pacientes, descubra o IMC de cada paciente e
  imprima:

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie um função para fazer o calculo de IMC

  Calculo de IMC = peso / (altura * altura)
*/

const patients = [ // Criando objetos dentro de arrays 
    {
        name: "Luis",
        age: 20 ,
        weight: 100 , 
        height: 190
    } ,
    {
        name: "Alexandra",
        age: 27 ,
        weight: 70 , 
        height: 170
    } ,
    {
        name: "Carlos",
        age: 42 ,
        weight: 90 , 
        height: 180
    } ,
]

function printPatientIMC(patients) {
    alert(`Paciente ${patients.name} possui o IMC de: ${(patients.weight / (patients.height / 100) ** 2).toFixed(2)}`)    // Calculo de IMC = peso / (altura * altura) / O dividido por 100 senve para arrendondar o número para ele não ficar com zeros quebrados / O toFixed serve para deixar com 2 casas decimais depois do ponto
    
}

for(let patient = 0; patient >= 0; patient++){
    printPatientIMC(patients[patient]) // variavel de controle
}



