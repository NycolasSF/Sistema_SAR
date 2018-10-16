var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');

var app = express();



app.set('view engine','ejs');
app.set('views','./app/views');


app.use(session({
  secret: 'sshhhhh',
  saveUninitialized: true,
   resave: true,
  saveUninitialized: true,
   cookie: { _expires:new Date() ,originalMaxAge: 1000000}
}));


app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());


app.use(express.static('public'));


consign()
.include('app/routes')
.then('serv_config/conexao_banco.js')
.then('app/controller')
.then('app/model')
.into(app);

module.exports = app;
