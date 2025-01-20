import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}){

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
    updateMinutes(minutes)
} 

function reset(){
    updateDisplay(minutes, 0) // Quando apertar o stop o timer volta para o tempo que colocamos no inicio
    clearTimeout(timerTimeOut)
}

function countdonw(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinishesd = minutes <= 0 && seconds <= 0

        updateDisplay(minutes, 0)
        
        if(isFinishesd){
            resetControls()
            updateDisplay()
            Sounds().timeEnd()
            return // Momento de parada do cronometro
        }

        if(seconds <= 0){
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))

        countdonw() // Recursão
    }, 1000)
}

function updateMinutes(newMinutes){
    minutes = newMinutes
}

function hold(){
    clearTimeout(timerTimeOut) // Função para parar o timerTimeOut, ou seja quando apertamos em pause o contador vai parar
}

return {
    countdonw,
    reset,
    updateDisplay,
    updateMinutes,
    hold
}
}