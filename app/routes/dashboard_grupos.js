// var oopa = {nome_grupo:'sar' };
module.exports = function (app) {
  app.get('/dashboard_grupo', function (req, res) {
    // res.render('dashboard/dashboard', {user: oopa})
    app.app.controller.dash_grupos.dashboard_grupo(app, req, res);
  });
  app.post('/lider/cadastro/aluno', function (req, res) {
    app.app.controller.dash_grupos.cadastrar_aluno(app, req, res);
  });
  app.get('/sair_grupo', function (req, res) {
    app.app.controller.dash_grupos.sair(app, req, res);
  });
}
