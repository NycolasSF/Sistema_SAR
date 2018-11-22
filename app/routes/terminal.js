module.exports = function (app) {
  app.get('/terminal', function(req, res) {
    res.render('terminal/terminal')
    // app.app.controller.terminal.terminal(app, req, res);
  });
}
