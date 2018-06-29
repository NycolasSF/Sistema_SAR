module.exports = function (app) {
  app.get('/admin', function (req, res) {
    app.app.controller.pagina_acesso.admin(app, req, res);
  });
}
