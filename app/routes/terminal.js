module.exports = function (app) {
  app.get('/terminal', function(req, res) {
    app.app.controller.terminal.terminal(app, req, res);
  });
}
