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

    pesquisa.cadastrar_professor(user.nome_professor, user.cpf_professor, user.formacao_professor, user.celular_professor, user.email_professor, user.senha_professor, user.instituicao_professor, user.cidadeUF_professor, function (error, cadatrado){
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


module.exports.cadastro_aluno = function (app, req, res){
  let user = req.body;

  req.assert('nome_aluno', 'Precisamos saber o nome do aluno!').notEmpty();
  req.assert('cpf_aluno', 'Digite o CPF com 11 digitos').len(11, 11).isInt();
  req.assert('email_aluno', 'Digite um email valido!').isEmail();
  req.assert('anoNascimento_aluno','Digite a data de nascimento do seu aluno').isDate();

}
