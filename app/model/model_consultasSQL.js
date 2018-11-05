class consultar{
  constructor(connection){
    this.connection = connection;
  }
  login(email, senha, callback){
    this.connection.query("SELECT * FROM Professores, Treineiros WHERE email_professor = '"+email+"' and senha_professor = '"+senha+"' OR email_treineiro = '"+email+"' and senha_treineiro = '"+senha+"' ",callback);
  }
  login_acessado(id_usuario, callback){
    this.connection.query("UPDATE Professores SET status_professor = 'on' where id_professor = '"+id_usuario+"' OR  id_aluno = '"+id_usuario+"' ", callback);
  }
  getAllprofessor(id, callback){
    this.connection.query("SELECT * FROM  Professor INNER JOIN  Sala INNER JOIN Sala_Aluno INNER JOIN Aluno  WHERE id_professor = Professor_id_professor and  id_sala = Sala_id_sala and id_aluno = Aluno_id_aluno and id_professor = "+id_professor+"", callback);
  }
  cadastrar_professor(nome, email, senha, callback){
    this.connection.query("INSERT INTO Professores VALUES(0, '"+nome+"', '"+email+"', '"+senha+"', 'img/ft_sar.png', 'of' )", callback)
  }
}

module.exports = function() {
  return consultar;
}
