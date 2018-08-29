module.exports = function (app) {
  app.post('/cadastrar/professor',function (req, res) {
    app.app.controller.pagina_acesso.cadastrar_professor(app, req, res);
  });
  app.post('/cadastrar/aluno',function (req, res) {
    app.app.controller.pagina_acesso.cadastrar_aluno(app, req, res);
  });
}
