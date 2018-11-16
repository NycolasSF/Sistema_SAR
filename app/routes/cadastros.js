module.exports = function (app) {
  app.post('/cadastrar/professor', function (req, res) {
    app.app.controller.cadastrar_users.cadastrar_professor(app, req, res);
  });
  app.post('/professor/cadastro/grupo', function (req, res) {
    app.app.controller.dashboard.cadastrar_grupo_aluno(app, req, res);
  });
  app.post('/cadastrar/treineiro', function (req, res) {
    app.app.controller.cadastrar_users.cadastrar_treineiro(app, req, res);
  });
  app.post('/lider/cadastro/aluno', function (req, res) {
    app.app.controller.dash_grupos.cadastrar_aluno(app, req, res);
  });
}
