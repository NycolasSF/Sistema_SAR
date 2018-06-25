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
document.querySelector('.a').onclick = function () {
  alert('vai')
  document.querySelector('nav').className = '';
  document.querySelector('#menu').className = '';
}
function abrir_fechar(x) {
    x.classList.toggle("change");
}
