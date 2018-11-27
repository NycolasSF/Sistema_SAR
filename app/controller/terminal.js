
const { base64encode, base64decode } = require('nodejs-base64');

var sess;

module.exports.terminal = function (app, req, res) {
    sess = req.session;
    let params = req.query;
    console.log(params);
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

    if (params) {

      let p_params_decoded = base64decode(params.q);
      let connection = app.serv_config.conexao_banco();
      let pesquisa = new app.app.model.model_consultasSQL(connection);

      if (params.p) {//professor
        pesquisa.p_login(sess.email, sess.senha, function (errProfessor, logadoProfessor) {
          if (errProfessor || logadoProfessor.length == 0) {
            res.render('pagina_acesso/pagina_acesso', {
              validacao: [{
                titulo: 'Algo deu errado',
                msg: 'Por favor, tente novamente.'
              }]
            });
          }else{
            pesquisa.p_getConectados(logadoProfessor[0].id_professor, p_params_decoded, function (errorPconectados, p_getConectados) {
              res.render('terminal/terminal', {
                user: logadoProfessor,
                conectados: p_getConectados
              });
            });
          }
        });
      }else if (params.t) {//treineiro
        pesquisa.t_login(sess.email, sess.senha, function (errProfessor, logadoProfessor) {
          if (errProfessor || logadoProfessor.length == 0) {
            res.render('pagina_acesso/pagina_acesso', {
              validacao: [{
                titulo: 'Algo deu errado',
                msg: 'Por favor, tente novamente.'
              }]
            });
          }else{
            res.render('terminal/terminal', {
              user: logadoProfessor,
              conectados: {}
            })
          }
        });
      }else{//aluno
        pesquisa.a_login(sess.email, sess.senha, function (errProfessor, logadoProfessor) {
          if (errProfessor || logadoProfessor.length == 0) {
            res.render('pagina_acesso/pagina_acesso', {
              validacao: [{
                titulo: 'Algo deu errado',
                msg: 'Por favor, tente novamente.'
              }]
            });
          }else{
            res.render('terminal/terminal', {
              user: logadoProfessor,
              conectados: {}
            })
          }
        });
      }
    }else{
      res.render('pagina_acesso/pagina_acesso',{
        validacao: [{
          titulo: 'Algo deu errado',
          msg: 'Por favor, tente novamente. Não achamos seu registro'
        }]
      });
    }
}
