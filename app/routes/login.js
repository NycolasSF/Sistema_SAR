module.exports = function (app) {
  app.get('/pagina_acesso', function(req, res) {
    app.app.controller.pagina_acesso.pagina_acesso(app,req, res);
  });
}
