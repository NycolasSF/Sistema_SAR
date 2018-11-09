module.exports = function (app) {
  app.post('/cadastrar/professor',function (req, res) {
    app.app.controller.cadastrar_users.cadastrar_professor(app, req, res);
  });
  app.post('/professor/cadastro/grupo',function (req, res) {
    app.app.controller.dashboard.cadastrar_grupo_aluno(app, req, res);
  });
}
