class consultar{
  constructor(connection){
    this.connection = connection;
  }
  login(email, senha, callback){
    this.connection.query("SELECT email_usuario, senha_usuario FROM `Usuario` WHERE email_usuario = '"+email+"' and senha_usuario = '"+senha+"'",callback);
  }
  // login_acesso(id_user,callback){
  //   this.connection.query("update lider_sala set data_acesso=now()  where id_lider='"+id_user+"'",callback);
  // }
}
module.exports = function() {
  return consultar;
}
