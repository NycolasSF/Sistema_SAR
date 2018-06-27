//**https://codemirror.net/doc/manual.html**//

//PEGANDO OS buttonS
// var btn_monokai = document.querySelector('#btn-theme-monokai');
// var btn_neat = document.querySelector('#btn-theme-neat');
// //MUDAR A COR
// var logica = false;
// var varTheme;
// btn_monokai.onclick = function(){
//   logica = false;
//   return logica;
// }
// btn_neat.onclick = function(){
//   logica = true;
// }
//
//
// //INICIANDO CODEMIRROR
// function mudar_thema() {
//
//   if (logica) {
//     varTheme = 'neat'
//     alert(theme)
//     }else{
//     varTheme = 'monokai'
//   }

  var editor = CodeMirror(document.querySelector('#codeeditor'), {
    mode: "javascript",
    value: "var robo = new Robo(connetion)",
    tabSize: 5,
    lineNumbers: true,
    theme: 'monokai'
  });
// }

//
// function verificar() {
//   var value = editor.getValue();
//   if (value.length == 0) {
//     alert('Digite uma linha de comando');
//   }else{
//     document.querySelector('#alert').innerHTML = 'RODANDO...';
//   }
// }
