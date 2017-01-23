/**
 * Created by morgansliman on 1/22/17.
 */
const orm = require('../config/orm');
const handlebars = require('express-handlebars');

function caps(title) {
	let words = title.split(' ');
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > 3 || words[i] != 'the') {
			words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}
	}
	title = words.join(' ');
	return title;
}


exports.helpers = {
	capitalize: caps
};