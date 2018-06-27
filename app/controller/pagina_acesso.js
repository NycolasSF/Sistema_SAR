var nodemailer = require('nodemailer');

module.exports.pagina_acesso = function (app, req, res) {

  let connection = app.serv_config.conexao_banco();
  let informacoes = new app.app.model.model_consultasSQL(connection);
 //informacoes --> PAIS_CIDADE E CATEGORIAS
   informacoes.pesquisar_dados(function (error, result) {
     res.render("pagina_acesso/pagina_acesso", {
       informacoes: result,
       validacao: {}
     });
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
  let email = req.body;

  req.assert('email', 'Preencha o campo email!').notEmpty();
  req.assert('senha', 'Preencha o campo senha!').notEmpty();

  var erros = req.validationErrors();
  console.log(erros);
  if (erros) {
    res.render('pagina_acesso/pagina_acesso', {
      validacao: erros,
    });
    return;
  }
  sess.email = req.body.email;
  sess.senha = req.body.senha;
  res.redirect('/admin');
}

module.exports.admin = function (app, req, res) {
  sess= req.session;

  let connection = app.serv_config.conexao_banco();
  let user = new app.app.model.model_consultasSQL(connection);

  user.login(sess.email, sess.senha, function(error, login){
    if (login.length == 0) {
      res.render('pagina_acesso/pagina_acesso', {
        validacao: [{
          msg: 'Não encontramos seu cadastro, verifique seu email e senha, e tente novamente'
        }]
      });
      return
    }
    res.render('dashboard/admin');
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
