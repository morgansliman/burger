/**
 * Created by morgansliman on 1/22/17.
 */
const mysql = require('mysql');
const pass = require('./pass');

const conn = mysql.createConnection({
	user: 'root',
	pass: pass.sql,
	host: 'localhost',
	port: 3306,
	database: 'burgers_db'
});

exports.connection = conn;