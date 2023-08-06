const btn = document.querySelector('.btn')
const form = document.querySelector('.enviar')
const inp = document.querySelector('.input')
const alerta = document.querySelector('.alert')
const icono = document.querySelector('.icono')

function send(event) {
    event.preventDefault()
    console.log('hola')
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailPattern.test(inp.value)) {
        form.submit()
    } else {
        alerta.classList.remove('inactive')
        inp.classList.add('input-error')
        icono.classList.remove('inactive')
    }
}


btn.addEventListener('click',send)

