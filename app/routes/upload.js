const {base64encode} = require('nodejs-base64');
var multer  = require('multer');


let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      let encode = base64encode(file.fieldname)
      cb(null, encode + Date.now());
    }
});

let upload = multer({storage: storage});



module.exports = function (app) {
  // professor
  app.post('/upload/fotoPerfil/professor', upload.single('fotoPerfil'), function (req, res) {
    app.app.controller.dashboard.editFoto(app, req, res);
  });
  // aluno
  app.post('/upload/fotoPerfil/aluno', upload.single('fotoPerfil'), function (req, res) {
    app.app.controller.dash_grupos.editFoto(app, req, res);
  });
  // treineiro
  app.post('/upload/fotoPerfil/treineiro', upload.single('fotoPerfil'), function (req, res) {
    app.app.controller.dash_grupos.editFoto(app, req, res);
  });
}
