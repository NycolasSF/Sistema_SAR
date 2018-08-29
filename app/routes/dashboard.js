module.exports = function (app) {
  app.get('/dashboard', function (req, res) {
    res.render("dashboard/dashboard")
    // app.app.controller.pagina_acesso.dashboard(app, req, res);
  });
}
