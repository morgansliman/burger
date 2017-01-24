/**
 * Created by morgansliman on 1/22/17.
 */
const conn = require('./connection');

const ORM = {
	selectAll: function(cb) {
		conn.query("SELECT * FROM `burgers`", (err, res) => {
			console.log('ORM:', res);
			cb(err, res);
		});
	},
	insertOne: function(param) {
		let sql = "INSERT INTO `burgers` (`burger_name`, `devoured`) values (?, 0)";
		conn.query(sql, param.toString(), (err, res) => {
			if (err) throw err;
			return res;
		});
	},
	updateOne: function (params) {
		let sql = "UPDATE `burgers` SET devoured=1 WHERE id=?";
		conn.query(sql, [params[0].toString(), params[1].toString()], (err, res) => {
			if (err) throw err;
			return res;
		});
	}
};

module.exports = ORM;