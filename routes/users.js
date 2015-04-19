var express = require('express');
var router = express.Router();

var user=require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	user=new user({
		name:'name1',
		age:34
	});
	
	var str='name:'+user.getName();
	str+=';age:'+user.getAge();
	
	user.save(function(callback){
		res.send(str);
	});
	
});

module.exports = router;
