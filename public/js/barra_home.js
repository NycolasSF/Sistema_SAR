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
document.querySelectorAll('nav a').forEach(function(item){
  item.onclick = function(){
    fecharMenu(y);
    y.classList.toggle("change");
  }
});
