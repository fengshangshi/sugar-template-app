/**
 * @file controller demo
 */

var GET_index = function(req, res) {
		var username = this.PARAM['username'];
		var password = this.PARAM['password'];
		res.render('account/user', {
				name: username,
				password: password
		});
};

GET_index.params = ['username', 'password'];

exports.GET_index = GET_index;
