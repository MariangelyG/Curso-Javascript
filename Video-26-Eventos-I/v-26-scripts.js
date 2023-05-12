// EVENTOS DE RATÓN
    //   CLICK: cuando pulsamos el boton izquiero del raton.
    //   DBLCLICK: cuando pulsamos dos veces seguidas el boton izquierdo del raton.
    //   MOUSEENTER: cuando entramos en la zona que tiene el evento. 
    //   MOUSEELEAVE: cuando salimos de la zona que tiene el evento.
    //   MOUSEDOWN: cuando pulsamos  el boton izquierdo del raton.
    //   MOUSEUP: cuando soltamos el boton izquierdo del raton.
    //   MOUSEMOVE: cuando movemos el raton. 

const button = document.getElementById('button')
button.addEventListener('click', () => {
    console.log('CLICK');
})
button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK');
})

const box = document.getElementById('box')
box.addEventListener('mouseenter', () =>{
    box.classList.replace('purple','blue')
})
box.addEventListener('mouseleave', () =>{
    box.classList.replace('blue', 'purple')
})

box.addEventListener('mousedown', () =>{
    console.log('has pulsado en la caja')
})
box.addEventListener('mouseup', () =>{
    console.log('has soltado el boton izquierdo  en la caja')
})

box.addEventListener('mousemove', () =>{
    console.log('estas moviendo el raton en la caja')
})

//  EVENTOS DEL TECLADO
        // KEYDOWN: cuando pulsamos una tecla.
        // KEYUP: cuando soltamos una tecla.
        // KEYPRESS: cuando pulsamos una tecla y no la soltamos

const input = document.getElementById('input')

input.addEventListener('keydown', () =>{
console.log('has pulsado una tecla')
})

input.addEventListener('keyup', () =>{
console.log('has soltado una tecla')
})

 input.addEventListener('keypress', () =>{
console.log('estas pulsando una tecla')
 })