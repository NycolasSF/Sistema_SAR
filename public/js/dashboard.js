

function sair(logico) {
	if (logico == true) {
		window.location.href='/sessao_finalizada';
	}else{
     $('#dialog-message').dialog( "open" );
		$( "#dialog-confirm" ).dialog( "close" );
	}
}

$( function() {
    $( "#dialog-confirm" ).dialog({

      autoOpen: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {

        "Encerrar Sessão": function() {
          sair(true);
        },
        Cancelar: function() {
          sair(false);
        }
      }
    });
     $( "#opener" ).on( "click", function() {
      $( "#dialog-confirm" ).dialog( "open" );
    });
  });
    $( function() {
    $( "#dialog-message" ).dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
});
