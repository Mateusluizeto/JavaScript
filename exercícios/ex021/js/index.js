import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { 
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay, 
    secondsDisplay,
} from "./elements.js"



const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
})

const timer = Timer({
    minutesDisplay, 
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sounds()

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdonw()
    sound.pressButton()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset() // Função para resetaar o timer
  sound.pressButton()
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.play()
})

buttonSet.addEventListener('click', function(){
   let newMinutes = controls.getMinutes()

    if(!newMinutes){ // Verificar se nao é um null ou undefined
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})
