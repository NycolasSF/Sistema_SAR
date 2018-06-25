module.exports = function (app) {
  app.get('/pagina_acesso', function(req, res) {
    app.app.controller.pagina_acesso.pagina_acesso(app,req, res);
  });
  app.post('/login', function (req, res) {
    app.app.controller.pagina_acesso.login(app,req,res);
  });
}
