//*atob - btoa*//

function terminal(idAluno, idTreineiro, idProfessor, idGrupo) {
  let enctype_aluno = btoa(idAluno),
      enctype_treineiro = btoa(idTreineiro),
      enctype_professor = btoa(idProfessor),
      enctype_grupo = btoa(idGrupo);

  location.href =  '/terminal?q='+enctype_grupo+'&a='+enctype_aluno+'&t='+enctype_treineiro+'&p='+enctype_professor

}
