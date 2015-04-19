var mongodb = require('mongodb');
var settings = require('../setting');

var server = new mongodb.Server('localhost', 27017, {
	auto_reconnect: true
});
var db = new mongodb.Db('nodetest1', server, {
	safe: true
});

module.exports = db;