module.exports = function (app) {
  app.post('/cadastrar/user',function (req, res) {
    app.app.controller.pagina_acesso.cadastrar_user(app, req, res);
  })
}
