console.log('Funcionando');
alert('Funda...');

function validarEmail(email_digitado){
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(!filter.test(email_digitado)){
        return false
    } else {
        return true
    }
}

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('open');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'close'){
                modal.classList.remove('open');
            }
        });
    }
}

function respEmail() {
    
    var pegarEmail = document.getElementById('email').value;
    var validacao = validarEmail(pegarEmail);

    if (validacao){
        var colocar = document.querySelector('h3 span');
        colocar.innerHTML = pegarEmail;
        iniciaModal('modalRespSucess');
        alert(`Oba! E-mail enviado com sucesso. Muito obrigado ` + pegarEmail + `, entraremos em contato.`)
    } else {
        iniciaModal('modalRespError');
        alert(`Ops! Digite um e-mail válido.`)
    }
}