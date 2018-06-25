var nodemailer = require('nodemailer');

module.exports.pagina_acesso = function(app, req, res) {
  res.render('pagina_acesso/pagina_acesso', {
    Titulo: 'SAR - Página de Acesso',
    validacao: {},
    color: {},
    color_font: {}
  });
}

var sess;

module.exports.login = function(app, req, res) {
  sess = req.session;
  let email = req.body;

  req.assert('email', 'Preencha o campo email!').notEmpty();
  req.assert('senha', 'Preencha o campo email!').notEmpty();

  var erros = req.validationErrors();
  if (erros) {
    res.render('pagina_acesso/pagina_acesso', {
      Titulo: 'SAR - Página de Acesso',
      validacao: erros,
      color: {},
      color_font: {}
    });
    return;
  }
  sess.email = req.body.email;
  sess.senha = req.body.senha;
  res.redirect('/admin');
}
module.exports.admin = function(app, req, res){
  sess = req.session;

  let connection = app.serv_config.conexao_banco();
  let model = new app.app.model.model_consultasSQL(connection);

  model.login(sess.email, sess.senha, function (error, result) {
    if (result.length == 0) {
      res.render('pagina_acesso/pagina_acesso', {
        Titulo: 'ERRo',
        color: {},
        color_font: {},
        validacao: [{
          msg: 'Algo de erradoo!!'
        }]
      });
      console.log(validacao[0].msg);
      return;
    }
    // ....
  });
}
