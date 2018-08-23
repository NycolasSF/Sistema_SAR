// BTN SHOW CADASTRAR
$('#btn-cadastrar').click(function() {
	$('#login').animate({//fecha o login
		height: 'hide',
		opacity: '0'
	}, 200);
	$('.container-cadastrar').animate({//abre cadastro
		display: 'flex',
		height: 'show',
		opacity: '1'
	});
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
});

//fecha alerts
function fechar(button, classe) {
	$('#'+classe).hide('fast');
}
