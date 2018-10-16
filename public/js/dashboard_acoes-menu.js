// MANUAL
$('#btn-manual').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#CadastrarEstudante').hide();
  $('#config').hide();
// abrir
  $('#manual').animate({
    height: 'show'
  });
});
// CADASTRAR ESTUDANTE
$('#btn-add_estudante').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#manual').hide();
  $('#config').hide();
// abrir
  $('#CadastrarEstudante').animate({
    height: 'show'
  });
});
// SALAS e TERMINAL
$('#btn-salas_terminal').click(function () {
// fechar
  $('#manual').hide();
  $('#CadastrarEstudante').hide();
  $('#config').hide();
// abrir
  $('#salasTerminal').animate({
    height: 'show',
    opacity: 1
  });
  $('.container-contatos').animate({
    height: 'show'
  }, 300);
});
// ADD SALA
$('#btn-add_classrom').click(function () {
// fechar
  $('.container-salas').hide();
  $('#CadastrarEstudante').hide();
  $('#manual').hide();
  $('#config').hide();
// abrir
  $('#cadastrar_sala').animate({
    height: 'show'
  });
});
// CONFIG
$('.btn-config').click(function () {
// fechar
  $('#CadastrarEstudante').hide();
  $('#manual').hide();
  $('#salasTerminal').hide();
// abrir
  $('#config').animate({
    height: 'show'
  });
});
function abrirCode() {
// fechar
  $('#CadastrarEstudante').hide();
  $('#manual').hide();
  $('#config').hide();
  $('#salas').hide();
  $('#salas-title').hide();
// abrir
  $('#terminal-CodeEditor').animate({
    height: 'show'
  });
}
