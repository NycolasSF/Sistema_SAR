module.exports = function (app) {
  app.post('/cadastrar/user/geral',function (req, res) {
    app.app.controller.pagina_acesso.cadastrar_user(app, req, res);
  });
  app.post('/cadastrar/user/pessoa_fisica',function (req, res) {
    app.app.controller.pagina_acesso.cadastrar_user(app, req, res);
  });
}
