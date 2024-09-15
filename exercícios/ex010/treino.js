
function calcular(number1, parameter, number2) {
    let result

    switch(parameter){
        case "+":
            result = number1 + number2
        break
        case "-":
            result = number1 - number2
        break
        case "*":
            result = number1 * number2
        break
        case "/":
            result = number1 / number2
        break
        default:
        console.log("impossivel fazer conta")
        break
    }

    return result
}

console.log(calcular(2, "/", 2))
