//*atob - btoa*//
function terminal(idAluno, idSala, idGrupo ) {
  let enctype_aluno = btoa(idAluno);
  let enctype_sala = btoa(idSala);
  let enctype_grupo = btoa(idGrupo);

  location.href =  '/terminal?q='+enctype_aluno+'&s='+enctype_sala+'&g='+enctype_grupo

}
