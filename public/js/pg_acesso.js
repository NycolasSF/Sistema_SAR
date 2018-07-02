var next = null;//variavel que recebe os valores da TAG OPTION

// pegando todos os VALUES de inputs(text, password)


// BTN SHOW CADASTRAR
$('#btn-cadastrar').click(function() {
	$('#login').animate({
		height: 'hide',
		opacity: '0'
	}, 200);
	$('.container-cadastrar').animate({
		display: 'flex',
		height: 'show',
		opacity: '1'
	});
	$('.alert').hide();
	//limpando valores dos inputs
	document.getElementById('cadastro').reset();

});
// BTN HIDE CADASTRAR
$('#btn-voltar').click(function() {
	$('#login').animate({
		height: 'show',
		opacity: '1'
	});
	$('.container-cadastrar').animate({
		height: 'hide',
		opacity: '0'
	},200);
	$('.categorias', function () {
		$('#info-usuario').animate({
		 	width: 'hide'
	 	}, 500);
		$('.primary-section').animate({
			marginLeft: '0',
			height: 'show',
			opacity: '1'
		});
		$('.info-usuarios').hide();
	});
});

// select OPTION
if (next == null) {
	$( ".categorias", function () {
		document.querySelector('#btn-next').onclick = function(){
			// deixando option selected disabled
		 		document.querySelector('#selected').selected = true;
		}
	} ).change(function() {
		$('#btn-next').show('fast');
		next = $('.categorias').val();
	});
	$('#btn-next').click(function() {
		$('.primary-section').animate({
			marginLeft: '100%',
			opacity: '0',
			width: 'hide',
		});
	  $('#info-usuario').animate({
			width: 'show'
		}, 500);
		$('#'+next).show(800);
	});
}

$('#alert-close').click(function (){
	$('.alert').hide('fast');
});
