//**https://codemirror.net/doc/manual.html**//
function criarCode() {
  abrirCode()
  $('textarea').each(function(elem) {
    var textArea = this;
    var string =
    "//Criando conexão com o robo \n"+
    "var connetion = '0.0.0.0' \n" +
    "//Instanciando a Classe \n"+
    "var sar = new Robo(connetion) \n"+
    "//Passando movimentos para ele \n"+
    "sar.move()";

    textArea.value = string

    var codeMirrorOpts = {
        lineNumbers: true,
        mode: "javascript",
        tabSize: 5,
        lineNumbers: true,
        theme: 'monokai',
        scrollbarStyle: "overlay",
        extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
      }
    }

    if ($(textArea).hasClass('html') || $(textArea).hasClass('script')) {
        codeMirrorOpts.mode = {name: 'xml', htmlMode: true}
      } else if ($(textArea).hasClass('js')) {
        codeMirrorOpts.matchBrackets = true;
    }

    var editor = CodeMirror.fromTextArea(textArea, codeMirrorOpts);

    $('#lightTheme').click(function(){
      editor.setOption("theme", 'neat');
    });darkTheme
    $('#darkTheme').click(function(){
      editor.setOption("theme", 'monokai');
    });

    if ($(textArea).hasClass('runnable')) {
      var button = $('<button class="btn run-button">Run!</button>');
      button.click(function() {
        var code = editor.getValue();
        if ($(textArea).hasClass('html')) {
          $('#demo').html(code);
        } else if ($(textArea).hasClass('script')) {
          $('body').append(code);
        } else if ($(textArea).hasClass('js')) {
          window.eval(code);
          window.onerror =  function(e, url, line){
            console.log('tem erro');
          }
        }
      });
      $(this).after(button);
    }
  });
}
