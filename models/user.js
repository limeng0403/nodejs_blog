var db = require('./db');

function User(user) {
	this.name = user.name;
	this.age = user.age;
}

User.prototype.getName = function() {
	return this.name;
}

User.prototype.getAge = function() {
	return this.age;
}

User.prototype.create = function() {
	return 'action';
}

User.prototype.save = function(callback) {
	var user = {
		'name': this.name,
		'age': this.age
	}
	db.open(function(err, db) {


		if (err) {
			return callback(err);
		}

		db.collection('testData', function(err, collection) {
			if (err) {
				db.close();
				return callback(err);
			}

			collection.insert(user, function(err, user) {
				db.close();

				if (err) {
					return callback(err);
				}

				callback(user[0]);
			});
		});
	});
}

module.exports = User;