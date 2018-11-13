function abrirCadastro2() {
  // fechar
  $('#form_Csala').hide();
  // abrir
  $('#forms_Cgrupos').animate({
    height: 'show'
  });
}


$('#btn-cadastrar_sala').click(function(){
    let nome_sala = document.getElementById('nome_sala').value;
    if (nome_sala != '') {
      $('#confirm_cadastro').animate({
        width: 'show'
      });
      abrirCadastro();
      let select = document.querySelector('#cusSelectbox');
      let classSelect= document.querySelector('.options');
      select.innerHTML += '<option value="'+nome_sala+'">'+nome_sala+'</option>';
      classSelect.innerHTML += '<li rel="'+nome_sala+'" >'+nome_sala+'</li>';
      select.display = 'none';
      newSelect();
    }else{
      $('#nome_sala').css('animation', 'inputVazio linear 2s!important')
      $('#modalAlert').show('slow');
      $('#modalAlert').css('background', 'var(--vermelho)');
      document.getElementById('title_alert').innerHTML = 'Error ao cadastrar sala!'
      document.getElementById('msg_alert').innerHTML = 'Professor, Preencha o campo Nome de Sala!'
      return;
    }
});
