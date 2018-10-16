const img = document.getElementById('img_slide-desktop');
const img_mobile = document.getElementById('img_slide-mobile');

function slides() {
  img.src = 'img/desktop/imagem_menu.png';
  setTimeout(slide02, 1000);
}
function slide02() {
  img.src = 'img/desktop/cafe_pao.png';
  setTimeout(slides, 4000);
}
