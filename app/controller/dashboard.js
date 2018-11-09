module.exports.pagina_acesso = function (app, req, res) {
  res.render("pagina_acesso/pagina_acesso", {
     validacao: {
       titulo: {},
       color_background: {}
     }
   });
}

var sess;
module.exports.logar = function (app, req, res) {
  sess = req.session;
  let user = req.body;

  req.assert('email_logar', 'Preencha o campo email!').isEmail();
  req.assert('senha_logar', 'Preencha o campo senha!').notEmpty();


  var erros = req.validationErrors();
  if (erros) {
      res.render('pagina_acesso/pagina_acesso', {
        validacao: [{
          titulo: 'Ops, algo de errado!',
          msg: 'Verifique seu email e senha'
        }]
      });
    return;
  }
  // Professor ou Treineiro
  sess.email = req.body.email_logar;
  sess.senha = req.body.senha_logar;

  res.redirect("/dashboard");
}
// dashboard
module.exports.dashboard = function (app, req, res) {
  sess = req.session;

  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.model_consultasSQL(connection);

  // TEST:
  sess.email = 'nycolassilvafroes@gmail.com';
  sess.senha = 'senhanycolas';


  pesquisa.login_professor(sess.email, sess.senha, function (error, logado) {
    if (logado.length == 0) {
      pesquisa.login_treineiro(sess.email, sess.senha, function (error, logado2){
        if (logado2.length == 0) {
          res.render('pagina_acesso/pagina_acesso',{
            validacao: [{
              titulo: 'Usuário não encontrado!',
              msg: 'Por favor, tente novamente.'
            }]
          });
          return;
        }else{ // É TREINEIRO
          res.render('dashboard/dashboard', {user: logado2});
        }
      })
    }else{ // É PROFESSOR
      pesquisa.p_getAlunos(logado[0].id_professor, function (err, getAlunos) {
        res.render('dashboard/dashboard', {
          validacao: {},
          user: logado,
          othesInfos: getAlunos
        })
      })
    }//fim-else
  });
}
// CADASTRAR Grupo

module.exports.cadastrar_grupo_aluno = function (app, req, res) {
    sess = req.session;

    let user = req.body;

    req.assert('select_sala', 'Precisamos saber o nome do aluno!').notEmpty();

    req.assert('nome_aluno', 'Precisamos saber o nome do aluno!').notEmpty();
    req.assert('email_aluno', 'Digite um email valido!').isEmail();

    let connection = app.serv_config.conexao_banco();
    let pesquisa = new app.app.model.model_consultasSQL(connection);

    sess.email = 'nycolassilvafroes@gmail.com';
    sess.senha = 'senhanycolas';

    var erros = req.validationErrors();
    if (erros) {
      console.log(erros);
      pesquisa.login_professor(sess.email, sess.senha, function (error, infoUser) {
        console.log('ERROR: '+infoUser);
        pesquisa.p_getAlunos(infoUser[0].id_professor, function (err, getAlunos) {
          console.log('ERROR: '+getAlunos);
          res.render('dashboard/dashboard', {
            validacao: [{
              titulo: 'Ops!',
              msg: erros[0].msg,
              color_background: 'var(--vermelho)'
            }],
            user: infoUser,
            othesInfos: getAlunos
          });
        });
      });
      return;
    }else{
      pesquisa.login_professor(sess.email, sess.senha, function (error, idProfessor) {
        pesquisa.p_getAlunos(idProfessor[0].id_professor, function(error2, p_getAlunos){
          pesquisa.p_inAluno(user.nome_aluno, user.email_aluno, function (err1, inAlunosLider) {
            pesquisa.p_inGrupos(user.nome_grupo, function (err2, inGrupos) {
              pesquisa.p_getUltimoGrupo(function (err3, idGrupo) {
                let id_grupo = idGrupo[0].id_grupo;
                pesquisa.p_getIdSala(user.select_sala, function (err4, idSala) {
                  let id_sala = idSala[0].id_sala;
                  pesquisa.p_inRegistros(id_grupo, id_sala, function (err5, registrado) {
                    if (error || error2 || err1 || err2 || err3 || err4 || err5) {
                      console.log('ERROR loginp '+error);
                      console.log('ERROR getAlunos'+error2);
                      console.log('ERROR 1'+err1);
                      console.log('ERROR 2'+err2);
                      console.log('ERROR 3'+err3);
                      console.log('ERROR 4'+err4);
                      console.log('ERROR 5'+err5);
                    }else {
                      res.render("dashboard/dashboard",{
                        validacao: [{
                          titulo: 'Grupo Cadastrado com sucesso',
                          msg: 'Peça ao estudante líder verificar seu email!',
                          color_background: 'var(--verde)'
                        }],
                        user: idProfessor,
                        othesInfos: p_getAlunos
                      });
                      // sendMail
                      let infoEmail = {
                        from: 'sar.nycolassf@gmail.com', // and sess.email
                        to: 'nycolassilvafroes@gmail.com',//user.email_aluno
                        subject: 'Bem-vindo ao SAR - Seu Amigo Robô',
                        template: 'template01',
                        context: {
                          linkButton: 'http://localhost:3001/pagina_acesso_grupo',
                          textInfo: 'Bem-vindo estudante, para ter acesso ao conteúdo clique no botão abaixo.'
                        }
                      }
                      pesquisa.p_funcSenmail(infoEmail, function (errEmail) {
                        if (errEmail) {
                          console.log(errEmail);
                        }
                      });
                    }
                  });
                });
              });
            });
          });
        });
      });
    }
}
module.exports.sair = function (app, req, res) {
  sess = req.session;
  sess.destroy(function (err) {
    delete sess;
    req.session = null;
    res.redirect('/pagina_acesso');
  });
}
