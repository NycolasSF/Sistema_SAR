module.exports = function (app) {
  app.get('/', function(req, res) {
    app.app.controller.index.index(app,req, res);
  });
}
