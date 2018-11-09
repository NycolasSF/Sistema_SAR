var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

class consultar{
  constructor(connection){
    this.connection = connection;
  }
  /*
  REGRA:
      p --> professores
      a --> alunos
      t --> treineiros

      in --> INSERT
      get --> SELECT
      upd --> UPDATE
      func --> funcoes js
  */
  // LOGIN --> SELECTs
  login_professor(email, senha, callback){
    this.connection.query("SELECT * FROM Professores WHERE email_professor = '"+email+"' and senha_professor = '"+senha+"' ",callback);
  }
  login_treineiro(email, senha, callback){
    this.connection.query("SELECT * FROM Treineiros WHERE email_treineiro = '"+email+"' and senha_treineiro = '"+senha+"' ",callback);
  }
  login_aluno(emailAluno, senhaAluno, callback){
    this.connection.query("SELECT * FROM Grupos INNER JOIN Alunos WHERE Alunos_id_aluno = id_aluno and  email_aluno = '"+emailAluno+"' and senha_aluno = '"+senhaAluno+"' ", callback)
  }
  login_acessado(id_usuario, callback){
    this.connection.query("UPDATE Professores, Alunos SET status_professor = 'on' where id_professor = '"+id_usuario+"' OR  id_aluno = '"+id_usuario+"' ", callback);
  }

  // p --> SELECTs
  p_getAlunos(id, callback){
    this.connection.query("SELECT nome_sala, nome_grupo, id_aluno, nome_aluno, email_aluno, ft_perfil, status_aluno, nome_professor, COUNT(id_aluno) AS qtd_alunos FROM professores INNER JOIN salas INNER JOIN grupos INNER JOIN resgistros INNER JOIN alunos where Professor_id_professor = id_professor and salas.Grupos_id_grupo = id_grupo and resgistros.Grupos_id_grupo = id_grupo and Alunos_id_aluno = id_aluno and id_professor = "+id+"", callback);
  }
  p_getUltimoGrupo(callback){
    this.connection.query("SELECT id_grupo FROM grupos ORDER BY id_grupo DESC LIMIT 1", callback)
  }
  p_getIdSala(nomeSala, callback){
    this.connection.query("SELECT id_sala FROM salas WHERE nome_sala = '"+nomeSala+"' ", callback)
  }
  // p --> INSERTs
  p_inAluno(nomeAluno, emailAluno, callback){
    this.connection.query("INSERT INTO Alunos VALUES(0, '"+nomeAluno+"', '"+nomeAluno+"senha' ,'"+emailAluno+"', 'img/ft_sar.png', 'Líder', 'of')", callback);
  }
  p_inGrupos(nomeSala, callback){
    this.connection.query("INSERT INTO Grupos VALUES(0, '"+nomeSala+"', 'img/ft_sar.png')", callback);
  }
  p_inRegistros(idGrupo, idAluno, callback){
    console.log(idGrupo);
    console.log(idAluno);
    this.connection.query("INSERT INTO Resgistros VALUES(0, "+idGrupo+", "+idAluno+")", callback);
  }
  p_inSalas(nomeSala, idProfessor, callback){
    this.connection.query("INSERT INTO Salas VALUES(0, '"+nomeSala+"', 0, 'now()', "+idProfessor+", "+idGrupo+")", callback);
  }
  // p --> funcoes
  p_funcSenmail(infoEmail, callback){
    let options = {
      viewEngine: {
        extname: '.hbs',
        layoutsDir: 'public/emailTemplates/',
        defaultLayout : 'template01'
      },
      viewPath: 'public/emailTemplates/',
      extName: '.hbs'
    };
    let configs = {
      service: 'gmail',
        auth: {
          user: 'sar.nycolassf@gmail.com',
          pass: 'meutccsar'
        }
    };

    let mailer = nodemailer.createTransport(configs);
    mailer.use('compile', hbs(options));
    mailer.sendMail(infoEmail, function (error, response) {
      if (error) {
        console.log(error)
      }else{
        console.log('Email enviado :' + response.response);
      }
      mailer.close();
    });
  }
}

module.exports = function() {
  return consultar;
}
