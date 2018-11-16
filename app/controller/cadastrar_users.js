// CADASTRO PROFESSOR
module.exports.cadastrar_professor = function (app, req, res) {
  let user = req.body;

  req.assert('nome_professor', 'Preencha o campo nome!').notEmpty();
  req.assert('email_professor', 'Preencha o campo email, com os devidos caracteres do email!').isEmail();
  req.assert('senha_professor', 'Preencha o campo senha com no minimo 8 caracteres').notEmpty();


  var erros = req.validationErrors();
  if (erros) {
    res.render('pagina_acesso/pagina_acesso', {
      validacao: erros,
    });
  }else{

    let connection = app.serv_config.conexao_banco();
    let pesquisa = new app.app.model.model_consultasSQL(connection);

    pesquisa.p_inProfessor(user.nome_professor, user.email_professor, user.senha_professor, function (error, cadastrado){
        res.render("pagina_acesso/pagina_acesso", {
          validacao: [{
            titulo: 'Cadastro realizado com sucesso!',
            color_background: 'rgba(41, 128, 185, 1.5)',
            msg: 'Divirta-se com seus alunos e o robozinho SAR. Agora é só realizar o LOGIN'
          }]
        });
    });
  }
}

// cadastrar_treineiro
module.exports.cadastrar_treineiro = function (app, req, res){
  let user = req.body;

  req.assert('nome_treineiro', 'Preencha o campo nome!').notEmpty();
  req.assert('email_treineiro', 'Preencha o campo email, com os devidos caracteres do email!').isEmail();
  req.assert('senha_treineiro', 'Preencha o campo senha com no minimo 8 caracteres').notEmpty();

  var erros = req.validationErrors();
  if (erros) {
    res.render('pagina_acesso/pagina_acesso', {
      validacao: erros,
    });
  }else{

    let connection = app.serv_config.conexao_banco();
    let pesquisa = new app.app.model.model_consultasSQL(connection);

    pesquisa.t_inTreineiros(user.nome_treineiro, user.email_treineiro, user.senha_treineiro, function (error, cadastrado){
        res.render("pagina_acesso/pagina_acesso", {
          validacao: [{
            titulo: 'Cadastro realizado com sucesso!',
            color_background: 'rgba(41, 128, 185, 1.5)',
            msg: 'Divirta-se com seue o robozinho SAR. Agora é só realizar o LOGIN'
          }]
        });
    });
  }


}
