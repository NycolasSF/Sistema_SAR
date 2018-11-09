let mysql = require('mysql');

// DA WEB
// var acessar_banco = function() {
// 	return mysql.createConnection({
// 			host:'www.db4free.net',
// 			user:'nycolassar',
// 			password:'senha_sar',
// 			database:'sar_login'
// 		});
// }

// LOCALHOST
var acessar_banco = function() {
	return mysql.createConnection({
			host:'localhost',
			user:'nycolasSF',
			password:'bd_nycolas',
			database:'sistema_sar'
		});
}

acessar_banco().connect();

module.exports = function(){
		console.log('Banco Conectado !!');
		return acessar_banco;
 }
