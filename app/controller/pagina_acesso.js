var nodemailer = require('nodemailer');

module.exports.pagina_acesso = function (app, req, res) {
  let user = req.body;

  let connection = app.serv_config.conexao_banco();
  let informacoes = new app.app.model.model_consultasSQL(connection);

  res.render("pagina_acesso/pagina_acesso", {
     validacao: [{
       titulo:{},
       color_background: {}
     }]
   });
}

var sess;

module.exports.acesso_negado = function(app, req, res){
  sess = req.session;

  if(sess.email && sess.matricula){
    res.redirect('/admin');
  }else{
    res.redirect('/pagina_acesso');
  }
}

module.exports.logar = function (app, req, res) {
  sess = req.session;
  let user = req.body;

  req.assert('email_logar', 'Preencha o campo email!').isEmail();
  req.assert('senha_logar', 'Preencha o campo senha!').len(10,10);


  let connection = app.serv_config.conexao_banco();
  let informacoes = new app.app.model.model_consultasSQL(connection);


  var erros = req.validationErrors();
  if (erros) {
    informacoes.pesquisar_dados(function (error, result) {
      res.render('pagina_acesso/pagina_acesso', {
        validacao: [{
          titulo: 'Ops, algo de errado!',
          msg: 'Verifique seu email e senha'
        }]
      });
    });
    return;
  }
  sess.email = req.body.email_logar;
  sess.senha = req.body.senha_logar;
  res.redirect("/admin");
}

module.exports.admin = function (app, req, res) {
  sess = req.session;

  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.model_consultasSQL(connection);

  pesquisa.login(sess.email, sess.senha, function(error, login){
    if (login.length == 0) {
      pesquisa.pesquisar_dados(function(error, pais_cidades) {
          validacao: [{
            titulo: 'Ops, algo de errado !',
              msg: 'Não encontramos seu cadastro, verifique seu email e senha, e tente novamente'
          }]
        });
      return;
    }
    login.forEach(function (usuario) {
        pesquisa.login(sess.email, sess.senha, function (error, logado) {
          pesquisa.login_acessado(usuario.id_usuario, function (error, atualizando) {
            res.render("dashboard/admin", {
              validacao: {
                titulo:{},
                color_background: {},
                erros: {}
              },
              nome: usuario.nome_usuario
            });
        });
      });
    });
  });//fim-admin
}
module.exports.sair = function (app, req, res) {
  sess = req.session;
  sess.destroy(function (err) {
    delete sess;
    req.session = null;
    res.redirect('/pagina_acesso');
  });
}

module.exports.cadastrar_user_professor = function (app, req, res) {
  let user = req.body;

  //usuarios
  req.assert('nome_cadastro', 'Preencha o campo email!').notEmpty();
  req.assert('email_cadastro', 'Preencha o campo senha com no 10 caracteres!').isEmail();
  req.assert('senha_cadastro', 'Preencha o campo senha com no 10 caracteres!').len(10,10);
  // professor
  req.assert('cidade_professor','Precisamos saber seu cidade').notEmpty();
  req.assert('titulacao','Professor, Precisamos saber sua titulação').notEmpty();
  req.assert('instituicao', 'Professor, precisamos saber sua instituição').notEmpty();
  req.assert('area_professor', 'Professor, precisamos saber sua de atuação').notEmpty();

  var erros = req.validationErrors();
  if (erros) {
    res.render('pagina_acesso/pagina_acesso', {
      validacao: erros,
    });
  }
  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.model_consultasSQL(connection);
  pesquisa.pesquisar_dados(function(erros, pais_cidades){
    pesquisa.mostrar_cidades_instituicao(user.pais_cidades, function (erros, Pais_Cidade) {
      pesquisa.cadastrar_professor(user.nome_cadastro, user.email_cadastro, user.senha_cadastro, function (erros, cadastro) {
        res.render("pagina_acesso/pagina_acesso", {
          validacao: [{
            titulo: 'Cadastro realizado com sucesso!',
            color_background: 'rgba(41, 128, 185,1.5)',
            msg: 'Divirta-se com seus alunos e o robozinho SAR'
          }],
        });
      });
    });
  });
}
