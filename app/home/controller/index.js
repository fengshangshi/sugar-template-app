/**
 * @file controller demo
 */
var GET_index = function(req, res, next) {
		res.render('index', {
				title: 'sugar',
				content: 'sugar is work'
		});
};

var POST_index = function(req, res, next) {
		var id = this.POST['id'];
		var token = this.POST['token'];
		var data = {id: id, token: token};
		res.json(data);
};

var GET_user = function(req, res) {
		var username = this.PARAM['username'];
		var password = this.PARAM['password'];
		res.render('post/index', {
				name: username,
				password: password
		});
};

GET_index.params = ['username', 'password'];



exports.GET_index = GET_index;
exports.POST_index = POST_index;
exports.GET_user = GET_user;
