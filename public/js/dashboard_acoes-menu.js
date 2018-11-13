// MANUAL
$('#btn-manual').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#CadastrarEstudante').hide();
  $('#config').hide();
  $('#ver_estudantes').hide();
  $('#cadastrar_sala_grupos').hide();
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
// & CADASTRAR GRUPOS_SALA --> PROFESSOR
$('#btn-add_classrom').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#manual').hide();
  $('#config').hide();
  $('#ver_estudantes').hide();
// abrir
  $('#cadastrar_sala_grupos').animate({
    height: 'show',
    display: 'flex'
  });
});
// FORMS-VOLTAR
$('#btn-voltar_Csalas').click(function () {
  // fechar
  $('#forms_Cgrupos').hide();
  $('#modalAlert').hide();
  $('#option_cSala').hide();
  // abrir
  $('#form_Csala').animate({
    height: 'show'
  });
});
// FORMS CADASTRO
$('#btn-cadastrar_grupo').click(function () {
  // fechar
  $('#form_Csala').hide();
  $('#modalAlert').hide();
  $('#option_cSala').hide();
  // abrir
  $('#forms_Cgrupos').animate({
    height: 'show'
  });
});
function abrirCadastro() {
  $('#btn-cadastrar_sala').click(function () {
    // fechar
    $('#form_Csala').hide();
    // abrir
  
    $('#forms_Cgrupos').animate({
      height: 'show'
    });
  });
}
// VER ESTUDANTES
$('#btn-add_ver_estudantes').click(function () {
// fechar
  $('#salasTerminal').hide();
  $('#manual').hide();
  $('#config').hide();
  $('#cadastrar_sala_grupos').hide();
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
  $('#cadastrar_sala_grupos').hide();
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
  $('#cadastrar_sala_grupos').hide();
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
  $('#cadastrar_sala_grupos').hide();
// abrir
  $('#terminal-CodeEditor').animate({
    height: 'show'
  });
}
