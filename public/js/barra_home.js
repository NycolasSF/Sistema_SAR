// MENU
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

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

  var header = document.getElementById("Home");
  var home_link = document.getElementById('home_link');

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

  } else {

  }
}
