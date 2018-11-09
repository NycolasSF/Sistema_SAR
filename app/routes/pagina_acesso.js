module.exports = function (app) {
  app.get('/pagina_acesso', function(req, res) {
    app.app.controller.dashboard.pagina_acesso(app, req, res);
  });
  app.post('/pagina_acesso/login', function (req, res) {
    app.app.controller.dashboard.logar(app, req, res);
  });
  app.get('/pagina_acesso_grupo', function(req, res) {
    app.app.controller.dash_grupos.pagina_acesso_grupo(app, req, res);
  });
  app.post('/pagina_acesso_grupo/login', function(req, res) {
    app.app.controller.dash_grupos.logar(app, req, res);
  });
}
