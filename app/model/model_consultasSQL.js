var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

class consultar{
  constructor(connection){
    this.connection = connection;
  }

  //Informações do BD:
  /*
      p --> professores
      a --> alunos
      t --> treineiros

      in --> INSERT
      get --> SELECT
      upd --> UPDATE
      func --> funcoes js
    */

  // LOGIN --> SELECTs
  p_login(email, senha, callback){
    this.connection.query("SELECT * FROM Professores WHERE email_professor = '"+email+"' and senha_professor = '"+senha+"' ",callback);
  }
  t_login(email, senha, callback){
    this.connection.query("SELECT * FROM Treineiros WHERE email_treineiro = '"+email+"' and senha_treineiro = '"+senha+"' ",callback);
  }
  a_login(emailAluno, senhaAluno, callback){
    this.connection.query("SELECT * FROM  Alunos WHERE email_aluno = '"+emailAluno+"' and senha_aluno = '"+senhaAluno+"' ", callback);
  }
  login_acessado(id_usuario, callback){
    this.connection.query("UPDATE Professores, Alunos SET status_professor = 'on' where id_professor = '"+id_usuario+"' OR  id_aluno = '"+id_usuario+"' ", callback);
  }

  // p --> SELECTs
  p_getAlunos(id, callback){
    this.connection.query("SELECT id_sala, nome_professor, nome_sala, id_grupo, nome_grupo, id_aluno, nome_aluno, email_aluno, ft_perfil, status_aluno, nome_professor, COUNT(id_grupo) AS qtd_alunos FROM Professores INNER JOIN Salas INNER JOIN Registros_sala INNER JOIN Grupos INNER JOIN Resgistros INNER JOIN Alunos on Professor_id_professor = id_professor and registros_sala.Grupos_id_grupo = id_grupo and Salas_id_sala = id_sala and resgistros.Grupos_id_grupo = id_grupo and Alunos_id_aluno = id_aluno WHERE id_professor = "+id+" GROUP BY nome_grupo", callback);
  }
  p_getUltimoGrupo(callback){
    this.connection.query("SELECT id_grupo FROM grupos ORDER BY id_grupo DESC LIMIT 1", callback)
  }
  p_getIdSala(nomeSala, callback){
    this.connection.query("SELECT id_sala FROM salas WHERE nome_sala = '"+nomeSala+"' ", callback)
  }
  p_getAtulizacao(id, callback){
    this.connection.query("SELECT * from Professores WHERE id_professor ="+id, callback);
  }
  // p --> INSERTs
  p_inAluno(nomeAluno, emailAluno, callback){
    this.connection.query("INSERT INTO Alunos VALUES(0, '"+nomeAluno+"', '"+nomeAluno+"senha' ,'"+emailAluno+"', 'img/ft_sar.png', 'Líder', 'of')", callback);
  }
  p_inGrupos(nomeSala, callback){
    this.connection.query("INSERT INTO Grupos VALUES(0, '"+nomeSala+"', 'img/ft_sar.png')", callback);
  }
  p_inRegistros(idGrupo, idAluno, callback){
    this.connection.query("INSERT INTO Resgistros VALUES(0, "+idGrupo+", "+idAluno+")", callback);
  }
  p_inSalas(nomeSala, idProfessor, idGrupo, callback){
    this.connection.query("INSERT INTO Salas VALUES(0, '"+nomeSala+"', 0, 'now()', "+idProfessor+")", callback);
  }
  p_inRegistrosSala(idSala, idGrupo, callback){
    this.connection.query("INSERT INTO registros_sala VALUES(0, "+idSala+", "+idGrupo+")", callback);
  }
  p_inProfessor(nomeProfessor, emailProfessor, senhaProfessor, callback){
    this.connection.query("INSERT INTO Professores VALUES(0, '"+nomeProfessor+"', '"+senhaProfessor+"', '"+emailProfessor+"', 'img/ft_sar.png', 'of');",callback);
  }
  // p --> upload
  p_uploadFoto(img, id, callback){
    this.connection.query("UPDATE professores SET ft_professor = 'uploads/"+img+"' WHERE id_professor = "+id+"", callback);
  }
  // Treineiro
  // t --> INSERT
  t_inTreineiros(nomeTreineiro, emailTreineiro, senhaTreineiro, callback){
    this.connection.query("INSERT INTO Treineiros VALUES(0, '"+nomeTreineiro+"', '"+senhaTreineiro+"', '"+emailTreineiro+"', 'img/ft_sar.png')", callback);
  }
  // a --> SELECTs
  a_getInfos(id, callback){
    this.connection.query("SELECT id_sala, nome_professor, nome_sala, nome_grupo, id_aluno, nome_aluno, email_aluno, ft_perfil, status_aluno, nome_professor, status_professor, COUNT(id_grupo) AS qtd_alunos FROM Professores INNER JOIN Salas INNER JOIN Registros_sala INNER JOIN Grupos INNER JOIN Resgistros INNER JOIN Alunos on Professor_id_professor = id_professor and registros_sala.Grupos_id_grupo = id_grupo and Salas_id_sala = id_sala and resgistros.Grupos_id_grupo = id_grupo and Alunos_id_aluno = id_aluno WHERE id_aluno = "+id+"", callback);
  }
  a_getRegistros(id, callback){
    this.connection.query("SELECT * FROM alunos  INNER JOIN resgistros INNER JOIN grupos on Alunos_id_aluno = id_aluno and Grupos_id_grupo = id_grupo WHERE id_aluno = "+id, callback);
  }
  a_getUltimoAluno(callback){
    this.connection.query("SELECT id_aluno FROM Alunos ORDER BY id_aluno DESC LIMIT 1", callback)
  }
  a_getAtulizacao(id, callback){
    this.connection.query("SELECT * from Alunos WHERE id_aluno ="+id, callback);
  }
  // a --> INSERT
  a_inAluno(nomeAluno, emailAluno, categoriaAluno, callback){
    this.connection.query("INSERT INTO Alunos VALUES(0, '"+nomeAluno+"', 'senhaaluno' ,'"+emailAluno+"', 'img/ft_sar.png', '"+categoriaAluno+"', 'of') ",callback);
  }
  a_inRegistros(idAluno, idGrupo, callback){
    this.connection.query("INSERT INTO Resgistros VALUES(0, "+idGrupo+", "+idAluno+");", callback)
  }
  // a --> upload
  a_uploadFoto(img, id, callback){
    this.connection.query("UPDATE Alunos SET ft_perfil = 'uploads/"+img+"' WHERE id_aluno = "+id+"", callback);
  }
  //  funcoes --> sendMail
  funcSenmail(infoEmail, callback){
    let options = {
      viewEngine: {
        extname: '.hbs',
        layoutsDir: 'public/emailTemplates/'
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
// SELECT * FROM Professores INNER JOIN Salas INNER JOIN Registros_sala INNER JOIN Grupos on Professor_id_professor = id_professor and Grupos_id_grupo = id_grupo and Salas_id_sala = id_sala WHERE id_professor = 2
  // SELECT * FROM Professores INNER JOIN Salas INNER JOIN Registros_sala INNER JOIN Grupos INNER JOIN Resgistros INNER JOIN Alunos on Professor_id_professor = id_professor and registros_sala.Grupos_id_grupo = id_grupo and Salas_id_sala = id_sala and resgistros.Grupos_id_grupo = id_grupo and Alunos_id_aluno = id_aluno WHERE id_professor = 2
module.exports = function() {
  return consultar;
}
