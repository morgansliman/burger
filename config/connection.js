/**
 * Created by morgansliman on 1/22/17.
 */
const mysql = require('mysql');
const pass = require('./pass');

const conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: pass.sql,
	database: 'burgers_db'
}).connect((err) => {
	if (err) throw err;
});

module.exports = conn;