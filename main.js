const form = document.getElementById('form-calculadora');
const numeroA = document.getElementById('num1');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroB = document.getElementById('num2');
    const mensagemSucesso = `O valor <b>B</b> é válido por ser maior que <b>A</b>`
        
    formEValido = (numeroA.value) < (numeroB.value)
    if (formEValido) {

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroContaBeneficiario.value = '';
        

    } else {
        alert(comando);
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block'
    }
})

