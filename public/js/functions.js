//fecha alerts
function fechar(button, classe) {
	$('#'+classe).hide('fast');
}

// search
function reset() {
  $('.contact-view').css({
    background: 'var(--branco)',
    color: 'var(--preto)'
  });
}
$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
  $('#search').val('');
  reset()
});
// CONTATOS
function showInfos(object){

  let i = object.id[0];
  $('#extras-infos'+i).animate({
    height: 'show'
  }, 1000);

  setTimeout(function () {
    $('#extras-infos'+i).animate({
      height: 'hide'
    });
  }, 5000);
}
// Pesquisar nos contatos
function filter(input) {
  let  filter, ul, li, a, i, qtd_alunos, container;

    // input = document.getElementById('search')
    filter = input.value.toUpperCase();

    ul = document.getElementById("contact");
    li = ul.querySelectorAll("#contact li");
    container = ul.querySelectorAll('#contact .contact-view');

    qtd_alunos = document.querySelector('.qtd_alunos');
    qtd_alunos.innerHTML = 'Quantidade: '+li.length;

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];


        let verif = a.innerHTML.toUpperCase().indexOf(filter);
        if (verif == -1) {
            li[i].style.display = "";

            container[i].style.background = "var(--preto)";
            container[i].style.color = "var(--branco)";

        } else {
            li[i].style.display = "none";
        }
    }
}
