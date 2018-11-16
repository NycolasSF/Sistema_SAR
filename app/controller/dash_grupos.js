const fs = require('fs-extra');

const { base64encode, base64decode } = require('nodejs-base64');

const expiryDateCookie = new Date( Date.now() + 60 * 60 * 1500 );

module.exports.pagina_acesso_grupo = function (app, req, res) {
  res.render("pagina_acesso/pagina_acesso_grupo", {
     validacao: {
       titulo: {},
       color_background: {}
     }
   });
};
var sess;

module.exports.logar = function (app, req, res) {
  sess = req.session;

  req.assert('email_aluno', 'O amigão digite seu nome!').isEmail();
  req.assert('senha_aluno', 'O amigão digite sua senha!').notEmpty();


  var erros = req.validationErrors();
  if (erros) {
      res.render('pagina_acesso/pagina_acesso_grupo', {
        validacao: [{
          titulo: 'Ops, algo de errado!',
          msg: erros[0].msg
        }],
        user: {},
        othersInfos: {}
      });
    return;
  }
  sess.email= req.body.email_aluno;
  sess.senha = req.body.senha_aluno;

  let email_encoded = base64encode(sess.email);
  let senha_encoded = base64encode(sess.senha);

  res.cookie('user', [email_encoded, senha_encoded], {expires: expiryDateCookie});

  res.redirect('/dashboard_grupo')
};
// dashboard_grupo
module.exports.dashboard_grupo = function (app, req, res) {
  sess = req.session;

  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.model_consultasSQL(connection);

  // VERIFICA SE TEM O cookie user
  if (req.cookies.user == undefined) {
    sess.email = undefined;
    sess.senha = undefined;
  }else{
    let email_decoded = base64decode(req.cookies.user[0]);
    let senha_decoded = base64decode(req.cookies.user[1]);
    sess.email = email_decoded;
    sess.senha = senha_decoded;
  }

  pesquisa.a_login(sess.email, sess.senha, function (err, logado) {
    if (logado.length == 0) {
      if (sess.email != undefined) {
        res.render('pagina_acesso/pagina_acesso_grupo', {
          validacao: [{
            titulo: 'Ops, algo de errado!',
            msg: 'Não achamos o: '+sess.email+'. Verifique sua senha e o nome do grupo!'
          }],
          user: {},
          othersInfos: {}
        });
      } else {
        res.render('pagina_acesso/pagina_acesso_grupo', {
          validacao: [{
            titulo: 'Ops, algo de errado!',
            msg: 'Não achamos seu email. Verifique sua senha e o nome do grupo!'
          }],
          user: {},
          othersInfos: {}
        });
      }
      return;
    }else{
      pesquisa.a_getInfos(logado[0].id_aluno, function (err, infosAluno) {
        res.render('dashboard/dashboard', {
          validacao: {},
          user: logado,
          othersInfos: infosAluno
        })
      });
    }
  });
};

module.exports.cadastrar_aluno = function (app, req, res) {
  sess = req.session;
  let userAluno = req.body;

  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.model_consultasSQL(connection);

  // VERIFICA SE TEM O cookie user
  if (req.cookies.user == undefined) {
    sess.email = undefined;
    sess.senha = undefined;
  }else{
    let email_decoded = base64decode(req.cookies.user[0]);
    let senha_decoded = base64decode(req.cookies.user[1]);
    sess.email = email_decoded;
    sess.senha = senha_decoded;
  }

  pesquisa.a_login(sess.email, sess.senha, function (err, logado) {

    req.assert('email_aluno', 'O amigão digite o email!').isEmail();
    req.assert('nome_aluno', 'O amigão digite o nome do integrante do seu grupo!').notEmpty();
    req.assert('categoria_alunos', 'O amigão selecione a categoria!').notEmpty();

    var erros = req.validationErrors();
    if (erros) {
      res.render('dashboard/dashboard', {
        validacao: [{
          titulo: 'Ops, algo de errado!',
          msg: erros[0].msg,
          color_background:'var(--vermelho)'
        }],
        user: logado,
        othersInfos: {}
      });
    }else{
      pesquisa.a_inAluno(userAluno.nome_aluno, userAluno.email_aluno, userAluno.categoria_alunos, function (err2, alunoCadastrado) {
        pesquisa.a_getRegistros(logado[0].id_aluno, function (err3, registroAluno) {
          pesquisa.a_getUltimoAluno(function (err4, idAluno) {
            pesquisa.a_inRegistros(idAluno[0].id_aluno, registroAluno[0].id_grupo, function (err5, alunoCadastradoRegistrado) {
              if (err || err2 || err3 || err4 || err5 ) {
                console.log(err);
                console.log(err2);
                console.log(err3);
                console.log(err4);
                console.log(err5);
                res.render('dashboard/dashboard', {
                  validacao: [{
                    titulo: 'Ops, algo de errado!',
                    msg: 'Não conseguimos cadastrar esse estudante. Por favor, tente novamente.',
                    color_background:'var(--vermelho)'
                  }],
                  user: logado,
                  othersInfos: {}
                });
              }else{
                pesquisa.a_getInfos(logado[0].id_aluno, function (err, infosAluno) {
                  res.render("dashboard/dashboard",{
                    validacao: [{
                      titulo: 'Seu parceiro cadastrado!',
                      msg: 'Diga para o seu parceiro o email',
                      color_background: 'var(--verde)'
                    }],
                    user: logado,
                    othersInfos: infosAluno
                  });
                });
                // sendMail
                let infoEmail = {
                  from: 'Seu Amigo Robô <sar.nycolassf@gmail.com>', // and sess.email
                  to: userAluno.email_aluno,//userAluno.email_aluno == email do aluno digitado
                  subject: 'Bem-vindo ao SAR - Seu Amigo Robô',
                  template: 'template02',
                  context: {
                    linkButton: 'http://'+req.headers.host+'/pagina_acesso_grupo',
                    textInfo: 'Bem-vindo estudante, para ter acesso ao conteúdo clique no botão abaixo.',
                    nomeAluno: userAluno.nome_aluno,
                    time: new Date().toDateString()
                  }
                }
                pesquisa.funcSenmail(infoEmail, function (errEmail) {
                  if (errEmail) {
                    console.log(errEmail);
                  }
                });
              }
            });
          });
        });
      });
    }
  });
};

module.exports.sair = function (app, req, res) {
  res.clearCookie('user');
  sess = req.session;
  sess.destroy(function (err) {
    delete sess;
    req.session = null;
    res.redirect('/pagina_acesso_grupo');
  });
}
