let mysql = require('mysql');

var acessar_banco = function() {
	return mysql.createConnection({
			host:'www.db4free.net',
			user:'nycolassar',
			password:'senha_sar',
			database:'sar_login'
		});
}

module.exports = function(){
	console.log('Banco Conectado !!');
	return acessar_banco;
 }
