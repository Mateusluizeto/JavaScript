/*
  Dada um lista de pacientes, descubra o IMC de cada paciente e
  imprima:

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie um função para fazer o calculo de IMC
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

let patientsNames = []

for(let index = 0; index < patients.length; index++) {
    patientsNames[index] = patients[index].name
}

alert(patientsNames)