class consultar{
  constructor(connection){
    this.connection = connection;
  }
  login_professor(email, senha, callback){
    this.connection.query("SELECT * FROM Professores WHERE email_professor = '"+email+"' and senha_professor = '"+senha+"' ",callback);
  }
  login_treineiro(email, senha, callback){
    this.connection.query("SELECT * FROM Treineiros WHERE email_treineiro = '"+email+"' and senha_treineiro = '"+senha+"' ",callback);
  }
  login_grupo(emailAluno, senhaAluno, callback){
    this.connection.query("SELECT * FROM Grupos INNER JOIN Alunos WHERE Alunos_id_aluno = id_aluno and  email_aluno = '"+emailAluno+"' and senha_aluno = '"+senhaAluno+"' ", callback)
  }
  login_acessado(id_usuario, callback){
    this.connection.query("UPDATE Professores, Alunos SET status_professor = 'on' where id_professor = '"+id_usuario+"' OR  id_aluno = '"+id_usuario+"' ", callback);
  }
}

module.exports = function() {
  return consultar;
}
