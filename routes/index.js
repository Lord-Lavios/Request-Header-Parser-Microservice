var express = require('express');
var router = express.Router();
var os = require('os');


/* GET home page. */
router.get('/', function(req, res) {
	res.set({
		'Content-Type': 'application/json'
	});
	var soft = os.type();
	var lang = req.headers['accept-language'];
	var ip = req.ip;
	var patt = /[a-z:]/g;
	var formip = ip.replace(patt,'');
	res.json({
		ip: formip,
		Software: soft,
		Language: lang
	})
});

module.exports = router;