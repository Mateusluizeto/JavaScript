import resetControls from "./controls.js"
import {Timer} from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
    timerTimeOut,
    resetControls,
})

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    
    timer.countdonw()

})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut) // Função para parar o timerTimeOut, ou seja quando apertamos em pause o contador vai parar
})

buttonStop.addEventListener('click', function(){
  resetControls()
  timer.resetTimer() // Função para resetaar o timer
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function(){
   let newMinutes = prompt('Quantos minutos?') || 0

    if(!newMinutes){ // Verificar se nao é um null ou undefined
        timer.resetTimer()
        return
    }
    
    minutes = newMinutes // depois de confeirir podemos atribuir ele aos minutes
    updateTimerDisplay(minutes, 0)
})