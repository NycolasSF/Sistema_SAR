class consultar{
  constructor(connection){
    this.connection = connection;
  }
  login(email, senha, callback){
    this.connection.query("SELECT email_usuario, senha_usuario FROM `Usuario` WHERE email_usuario = '"+email+"' and senha_usuario = '"+senha+"'",callback);
  }
  login_acessado(id_usuario, callback){
    this.connection.query("updade set usuario dataAcesso_usuario = now() where id_usuario = "+id_usuario+"", callback);
  }
  pesquisar_dados(callback){//futuramente pegar as categorias também
    this.connection.query("SELECT nome_pais, nome_cidade FROM Pais_Cidade, Cidade, Pais WHERE Cidade_id_cidade = id_cidade AND Pais_id_pais = id_pais", callback);
  }
  // login_acesso(id_user,callback){
  //   this.connection.query("update lider_sala set data_acesso=now()  where id_lider='"+id_user+"'",callback);
  // }
}
module.exports = function() {
  return consultar;
}
