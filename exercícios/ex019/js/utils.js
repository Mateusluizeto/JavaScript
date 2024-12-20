export function notNumber(value){
    return isNaN(value) || value == "" // Essa função já existe no js (se não for um número é true e se for é false)
}

export function CalculateIMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}