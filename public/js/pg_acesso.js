// BTN SHOW CADASTRAR
$('#btn-cadastrar').click(function() {
	$('#login').animate({//fecha o login
		height: 'hide',
		opacity: '0'
	}, 200);
	$('.alert').hide('fast');//fecha os alerts abertos
	$('#type_user').animate({//abre cadastro
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
	$('#type_user').animate({
		height: 'hide',
		opacity: '0'
	},200);
	$('#cadastro').animate({
		height: 'hide',
		opacity: '0'
	},200);
});


// BTN HIDE type_user
$('#btn-voltar-type').click(function() {
	$('#type_user').animate({
		height: 'show',
		opacity: '1'
	},200);
	$('#cadastro').animate({
		height: 'hide',
		opacity: '0'
	},250);
});


// Função para saber sobre a opção selecionada decidindo: PROFESSOR OU TREINEIRO
function OptionSelected(name) {
	let value = name;
	if (value == 'Professor') {
		$('#type_user').delay(2000).animate({
			height: 'hide',
			opacity: '1'
		}, 1000);
		$('#cadastro').animate({
			height: 'show',
			opacity: '1'
		});
		$('#treineiro').hide('height');
		$('#professor').show('slow');
	}else{
		$('#type_user').delay(2000).animate({
			height: 'hide',
			opacity: '1'
		}, 1000);
		$('#cadastro').animate({
			height: 'show',
			opacity: '1'
		},200);
		$('#professor').hide('height');
		$('#treineiro').show('slow');
	}
}


//fecha alerts
function fechar(button, classe) {
	$('#'+classe).hide('fast');
}
