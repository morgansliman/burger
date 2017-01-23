/**
 * Created by morgansliman on 1/22/17.
 */
const express = require('express');
const bodyParser = require('body-parser');
const model = require('../models/burger');
const handlebars = require('express-handlebars');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
	res.render('index');
});

router.post('/', (req, res) => {
	console.log(req.body);
	res.render('index', req.body);
});

module.exports = router;