/**
 * @file 公共中间件开发
 * @author demo
 */
module.exports = function() {
		return function(req, res, next) {
				// 中间件业务逻辑	
				next();
		};
};
