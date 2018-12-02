$(document).ready(function(){
  $('textarea').each(function(elem) {
    var textArea = this;


    var string =
    "//Criando conexão com o robo \n"+
    "var connetion = '192.168.25.194' \n" +
    "//Instanciando a Classe \n"+
    "var sar = new Robo(connetion) \n"+
    "//Passando movimentos para ele \n"+
    "//sar.StopRobo() \n"+
    "//sar.moveTras() \n"+
    "//sar.viraDireita() \n"+
    "//sar.viraEsquerda() \n"+
    "sar.moveFrente()";

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
        codeMirrorOpts.mode = {name: 'xml', htmlMode: false}
      } else if ($(textArea).hasClass('js')) {
        codeMirrorOpts.matchBrackets = true;
    }

    var editor = CodeMirror.fromTextArea(textArea, codeMirrorOpts);


    $('#btn-theme-light').click(function(){
      editor.setOption("theme", 'neat');
      lightTheme()
    });
    $('#btn-theme-dark').click(function(){
      editor.setOption("theme", 'monokai');
      darkTheme()
    });

    $(editor.getWrapperElement()).keydown(function(e) {
      if (e.ctrlKey && e.keyCode == 13) {
        executCode();
      }
    });

    if ($(textArea).hasClass('runnable')) {
      function executCode() {
        var code = editor.getValue();
        if ($(textArea).hasClass('html')) {
        } else if ($(textArea).hasClass('script')) {
          $('body').append(code);
        } else if ($(textArea).hasClass('js')) {
          window.onerror = function(message)  {
              Alert.error(message, 'Ops! erro no código' );
            return message;
          };
          window.eval(code);
        }
      }
    }
  });
});
