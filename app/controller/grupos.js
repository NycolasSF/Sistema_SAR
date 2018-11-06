
var sess;

module.exports.acesso_negado = function(app, req, res){
  sess = req.session;

  if(sess.email && sess.senha ){
    res.redirect('/dashboard_grupo');
  }else{
    res.redirect('/pagina_acesso');
  }
}

module.exports.pagina_acesso_grupo = function (app, req, res) {
  sess = req.session;
  let user = req.body;

  req.assert('email_aluno', 'O amigão digite seu nome!').isEmail();
  req.assert('senha_aluno', 'O amigão digite sua senha!').notEmpty();


  var erros = req.validationErrors();
  if (erros) {
      res.render('pagina_acesso/pagina_acesso_grupo', {
        validacao: [{
          titulo: 'Ops, algo de errado!',
          msg: erros[0].msg
        }]
      });
    return;
  }
  sess.email= req.body.email_aluno;
  sess.senha = req.body.senha_aluno;

  res.redirect('/dashboard_grupo')
};
// dashboard_grupo
module.exports.dashboard_grupo = function (app, req, res) {
  sess = req.session;

  let connection = app.serv_config.conexao_banco();
  let pesquisa = new app.app.model.model_consultasSQL(connection);


  pesquisa.login_grupo(sess.email, sess.senha, function (err, logado) {
    if (logado == 0) {
      if (sess.nome != undefined) {
        res.render('pagina_acesso/pagina_acesso_grupo', {
          validacao: [{
            titulo: 'Ops, algo de errado!',
            msg: 'Não achamos essse nome de grupo: '+sess.nome+'. Verifique sua senha e o nome do grupo!'
          }]
        });
      }else {
        res.render('pagina_acesso/pagina_acesso_grupo', {
          validacao: [{
            titulo: 'Ops, algo de errado!',
            msg: 'Não achamos o nome do grupo. Verifique sua senha e o nome do grupo!'
          }]
        });
      }
      return;
    }else{
        res.render('dashboard/dashboard', {user: logado})
    }
  });
};
module.exports.cadastrar_aluno = function (app, req, res) {
  sess= req.session;
  let infoAluno = req.body;


};

module.exports.sair = function (app, req, res) {
  sess = req.session;
  sess.destroy(function (err) {
    delete sess;
    req.session = null;
    res.redirect('/pagina_acesso_grupo');
  });
}
