class consultar{
  constructor(connection){
    this.connection = connection;
  }
  login(email, senha, callback){
    this.connection.query("SELECT * FROM Usuario WHERE email_usuario = '"+email+"' and senha_usuario = '"+senha+"'",callback);
  }
  login_acessado(id_usuario, callback){
    this.connection.query("UPDATE Usuario set  dataAcesso_usuario = now() where id_usuario = '"+id_usuario+"' ", callback);
  }
  usuario(callback){
    this.connection.query("SELECT * from Usuario", callback);
  }
  mostrar_paises(callback){
    this.connection.query("SELECT * FROM pais", callback);
  }
  input_pesquisarInstituicao(instituicao, callback){
    this.connection.query("SELECT id_pais_cidade, id_pais, id_cidade, nome_instituicao, nome_pais, nome_cidade FROM Instituicao, Pais_Cidade, Pais, Cidade  WHERE  PaisCidade_id_paiscidade = id_pais_cidade and Cidade_id_cidade = id_cidade and Pais_id_pais = id_pais and nome_instituicao like '%"+instituicao+"%'")
  }
  mostrar_cidades_instituicao(nome_pais, callback){//mostra as cidades e a instituicao do pais selecionado
    this.connection.query("SELECT * FROM Instituicao, Pais_Cidade, Pais, Cidade where PaisCidade_id_paiscidade = id_pais_cidade and Cidade_id_cidade = id_cidade and Pais_id_pais = id_pais and nome_pais = '"+nome_pais+"'", callback);
  }
  cadastrar_professor(titutlacao, area, tipo, instituicao, callback){
    this.connection.query("INSERT INTO Professor(titulacao_professor, area_professor, Instituicao_id_Instituicao) VALUES('"+titulacao+"', '"+area+"', "+instituicao+")", callback)
  }
  selecionar_id_professor(callback){
    this.connection.query("SELECT * FROM Professor ORDER BY id_professor DESC limit 1",callback);
  }
  cadastrar_categoria(id_professor, id_pessoaF, callback){
    this.connection.query("INSERT INTO Categoria(Professor_id_professor, PessoaFisica_id_pessoaF) VALUES("+id_professor+", "+id_pessoaF+")", callback);
  }
  selecionar_id_categoria(callback){
    this.connection.query("SELECT * FROM Categoria ORDER BY id_categoria DESC limit 1", callback);
    //ou select * from Usuario where id_usuario = (select max(id_usuario) from Usuario)
  }
  cadastrar_usuario(nome, email, senha, data, categoria, callback){
    this.connection.query("INSERT INTO Usuario(nome_usuario, email_usuario, senha_usuario, dataAcesso_usuario, Categoria_id_categoria) VALUES('"+nome+"','"+email+"', '"+senha+"', now(), "+categoria+")")
  }
}

module.exports = function() {
  return consultar;
}
