module.exports = function (app) {
  app.get('/admin', function (req, res) {
    res.render("dashboard/admin")
    // app.app.controller.pagina_acesso.admin(app, req, res);
  });
}
