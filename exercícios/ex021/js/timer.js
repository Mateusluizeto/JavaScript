export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls
}){
function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
} 

function resetTimer(){
    updateTimerDisplay(minutes, 0) // Quando apertar o stop o timer volta para o tempo que colocamos no inicio
    clearTimeout(timerTimeOut)
}

function countdonw(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)
        
        if(minutes <= 0){
            resetControls()
            return // Momento de parada do cronometro
        }

        if(seconds <= 0){
            seconds = 2
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countdonw() // Recursão
    }, 1000)
}

return {
    countdonw,
    resetTimer,
}

}