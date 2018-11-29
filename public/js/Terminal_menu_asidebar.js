// CONTATOS
$('#btn-contact').click(function () {
  $('.container-contatos').animate({
    height: 'show',
    right: '10%'
  }, 600);
});
$('#btn-closeContatos').click(function() {
  $('.container-contatos').animate({
    right: '0',
    width: '0',
    height: 'hide'
  }, 600);
});

var codeLinenumber = document.querySelectorAll('.CodeMirror-linenumber');
function darkTheme(){
  $('.menu-asidebar').css({
    'background': 'var(--branco)'
  });
  $('.menu-asidebar li').css({
    'color': 'rgba(0,0,0,0.8)'
  });
  $('.container-contatos').css({
    'background': 'var(--branco)'
  });
  $('.CodeMirror-gutters').css({
    'border-right': 'solid 2px var(--preto)!important',
    'background': 'var(--branco)!important'
  });
  $('.CodeMirror').css(
    'border', 'none!important'
  );
}
function lightTheme(){
  $('.menu-asidebar').css({
    'background': 'var(--preto)'
  });
  $('.menu-asidebar li').css({
    'color': 'rgba(255,255,255,1)'
  });
  $('.CodeMirror-linenumber').css('color', 'var(--preto)!important');
  $('#terminal-CodeEditor').css('background', 'var(--cinza-menu)')
}
