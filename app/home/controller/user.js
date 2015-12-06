/**
 * @file controller demo
 */

var GET_user = function(req, res) {
		var username = this.PARAM['username'];
		var password = this.PARAM['password'];
		res.render('post/index', {
				name: username,
				password: password
		});
};

GET_user.params = ['username', 'password'];

exports.GET_user = GET_user;
