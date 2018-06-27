module.exports = function (app) {
  app.get('/pagina_acesso', function(req, res) {
    app.app.controller.pagina_acesso.pagina_acesso(app, req, res);
  });
  app.post('/pagina_acesso/login', function (req, res) {
    app.app.controller.pagina_acesso.logar(app, req, res);
  });
}
