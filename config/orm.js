/**
 * Created by morgansliman on 1/22/17.
 */
const conn = require('./connection');

const ORM = {
	selectAll: function() {
		conn.connect();
		conn.query("SELECT * FROM `burgers`;", (err, res) => {
			if (err) throw err;
			return res;
		});
	},
	insertOne: function(param) {
		conn.connect();
		let sql = "INSERT INTO `burgers` (`burger_name`, `devoured`) values (?, 0)";
		conn.query(sql, param.toString(), (err, res) => {
			if (err) throw err;
			return res;
		});
	},
	updateOne: function (params) {
		conn.connect();
		let sql = "UPDATE `burgers` SET devoured=? WHERE id=?";
		conn.query(sql, [params[0].toString(), params[1].toString()], (err, res) => {
			if (err) throw err;
			return res;
		});
	}
};

module.exports = ORM;