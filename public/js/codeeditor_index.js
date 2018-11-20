$('textarea').each(function(elem) {
  var textArea = this;
  var string =
  "//Começe pelo básico \n"+
  "alert('Olá, bem-vindo ao SAR') \n"
  textArea.value = string

  var codeMirrorOpts = {
      lineNumbers: true,
      mode: "javascript",
      theme: 'monokai',
      tabSize: 5,
      lineNumbers: true,
      scrollbarStyle: "overlay"
  }

  if ($(textArea).hasClass('html') || $(textArea).hasClass('script')) {
      codeMirrorOpts.mode = {name: 'xml', htmlMode: true}
    } else if ($(textArea).hasClass('js')) {
      codeMirrorOpts.matchBrackets = true;
  }

  var editor = CodeMirror.fromTextArea(textArea, codeMirrorOpts);

  if ($(textArea).hasClass('runnable')) {
    var button = $('<button class="btn run-button">Executar!</button>');
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
