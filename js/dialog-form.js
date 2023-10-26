// Variáveis
var btnAbreDialog = document.querySelector('#dialog-form');
var form = document.querySelector('#form-contato');
var dialog = document.querySelector('.dialogNewsletter2');
var dialogBody = document.querySelector('.dialogNewsletter2-body');
var dialogOverlay = document.querySelector('.dialogNewsletter2-overlay');

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var phone = document.querySelector('#phone');
  var menssage = document.querySelector('#menssage');

  if(name?.value && email.value && phone?.value){
    dialog.classList.add('dialogNewsletter2--aberto');
  }
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter2--aberto');     
}

// Listeners
document.querySelector('.dialogNewsletter2-fechar').addEventListener('click', fechandoDialog);