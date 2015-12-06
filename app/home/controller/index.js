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

exports.GET_index = GET_index;
exports.POST_index = POST_index;
