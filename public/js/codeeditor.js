//**https://codemirror.net/doc/manual.html**//
var string =
'//Criando conexão com o robo \n'+
'var connetion = 192.168.1.204 \n' +
'//Instanciando a Classe \n'+
'var sar = new Robo(connetion) \n'+
'//Passando movimentos para ele \n'+
'sar.move(10)'
function criarCode() {
  abrirCode()
  var editor = CodeMirror(document.querySelector('#codeeditor'), {
    mode: "javascript",
    value: string,
    tabSize: 5,
    lineNumbers: true,
    theme: 'monokai'
  });

}
