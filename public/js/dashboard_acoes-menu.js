// MANUAL
$('#btn-manual').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#CadastrarEstudante').hide();
  $('#config').hide();
  $('#ver_estudantes').hide();
  $('#cadastrar_sala').hide();
// abrir
  $('#manual').animate({
    height: 'show'
  });
});
// CADASTRAR ESTUDANTE --> LÍDER
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
// & CADASTRAR GRUPOS --> PROFESSOR
$('#btn-add_classrom').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#manual').hide();
  $('#config').hide();
  $('#ver_estudantes').hide();
// abrir
  $('#cadastrar_sala').animate({
    height: 'show',
    display: 'flex'
  });
});
// VER ESTUDANTES
$('#btn-add_ver_estudantes').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#manual').hide();
  $('#config').hide();
  $('#cadastrar_sala').hide();
// abrir
  $('#ver_estudantes').animate({
    height: 'show'
  });
});
// ver estutantes
$('#btn-salas_terminal').click(function () {
// fechar
  $('#manual').hide();
  $('#CadastrarEstudante').hide();
  $('#config').hide();
  $('#ver_estudantes').hide();
  $('#cadastrar_sala').hide();
// abrir
  $('#salasTerminal').animate({
    height: 'show',
    opacity: 1
  });
  $('.container-contatos').animate({
    height: 'show'
  }, 300);
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

// CONFIG
$('.btn-config').click(function () {
// fechar
  $('#CadastrarEstudante').hide();
  $('#manual').hide();
  $('#salasTerminal').hide();
  $('#ver_estudantes').hide();
  $('#cadastrar_sala').hide();
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
  $('#ver_estudantes').hide();
  $('#cadastrar_sala').hide();
// abrir
  $('#terminal-CodeEditor').animate({
    height: 'show'
  });
}
