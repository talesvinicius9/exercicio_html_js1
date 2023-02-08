const form = document.getElementById('form-calculadora');
const numeroA = document.getElementById('num1');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroB = document.getElementById('num2');
    const mensagemSucesso = `O valor <b>B</b> é válido por ser maior que <b>A</b>`
    const mensagemErro = `Comando Inválido`
        
    formEValido = (numeroA.value) < (numeroB.value)
    if (formEValido) {

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

        }
})
