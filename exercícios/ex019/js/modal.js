 export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector(".modal button.close"),

    open: function(){
        Modal.wrapper.classList.add('open')
    },

    close: function(){
        Modal.wrapper.classList.remove('open')
    } ,
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){ // Função que faz com que quand eu aperte o esc ele fecha o modal
 if(event.key == 'Escape'){
    Modal.close()
 }
}