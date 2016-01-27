var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.set({
		'Content-Type': 'application/json'
	});
	var userAgent = req.get('user-agent');
	userAgent = userAgent.slice(userAgent.indexOf("(") + 1, userAgent.indexOf(")"));
	var userLang = req.get('accept-language');
	userLang = userLang.slice(0, userLang.indexOf(","));
	var userIp = req.ip;
	userIp = userIp.replace(/[a-z:]/g,'');
	res.json({
		ip: userIp,
		Language: userLang,
		OS: userAgent
	})
});

module.exports = router;