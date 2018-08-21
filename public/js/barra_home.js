// MENU
function abrirMenu(){
  document.querySelector('nav').className = 'opened';
  document.querySelector('#menu').className = 'opened';
}
function fecharMenu(){
  document.querySelector('nav').className = '';
  document.querySelector('#menu').className = '';
}
document.querySelector('#menu').onclick = function(){
  if(document.querySelector('nav').className != 'opened'){
    abrirMenu();
  }else{
    fecharMenu();
  }
};

function abrir_fechar(x) {
    x.classList.toggle("change");
}

// scroll

function verificarMedia(x) {
    if (x.matches) {
      window.onscroll = function() {scrollFunction()};
    } else {
        return x
    }
}

var media = window.matchMedia("(min-width: 840px)");
verificarMedia(media)
media.addListener(verificarMedia)

// MODIFICAÇÕES NAV
function scrollFunction() {

  var nav = document.getElementById("navbar");
  var home_link = document.getElementById('home_link');

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

      nav.style.position = "fixed";

      nav.style.background = "rgba(255, 255, 255, .8)";

      nav.style.left = '70%';
      nav.style.width = '30%';

      home_link.style.fontSize = '1rem';
  } else {
    nav.style.background = "#fff";

    nav.style.width = "50%";
    nav.style.left = '50%';

    home_link.style.fontSize = '';
  }
}
