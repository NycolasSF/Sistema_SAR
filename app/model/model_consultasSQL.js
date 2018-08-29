class consultar{
  constructor(connection){
    this.connection = connection;
  }
  login(email, senha, callback){
    this.connection.query("SELECT * FROM Professor, Aluno WHERE email_professor = '"+email+"' and senha_professor = '"+senha+"' OR email_aluno = '"+email+"' and CPF_aluno = '"+senha+"' ",callback);
  }
  login_acessado(id_usuario, callback){
    this.connection.query("UPDATE Professor set  dataAcesso_professor = now() where id_usuario = '"+id_usuario+"' ", callback);
  }
  All_Alunos(callback){
    this.connection.query("SELECT * from Alunos, Professor WHERE email_professor = '"+email+"'", callback);
  }
  cadastrar_professor(nome, cfp, formacao, telefone, email, senha, instituicao, cidadeUF, callback){
    this.connection.query("INSERT INTO Professor VALUES(0, '"+nome+"', '"+cfp+"', '"+formacao+"', '"+telefone+"', '"+email+"', '"+senha+"', now(), '"+instituicao+"', '"+cidadeUF+"' ) ", callback)
  }
}

module.exports = function() {
  return consultar;
}
