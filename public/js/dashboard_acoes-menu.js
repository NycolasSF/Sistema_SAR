// salas e terminal
$('#btn-salas_terminal').click(function () {
// FECHANDO
  $('#manual').hide();
  $('#CadastrarEstudante').hide();
// ABRINDO
  $('#salasTerminal').animate({
    height: 'show',
    opacity: 1
  });
  $('.container-contatos').animate({
    height: 'show'
  }, 300);

})
