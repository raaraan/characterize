var https = require('https')

exports.test = function(req, res) {

	res.render('animal', {
		'image': 'http://icons.iconarchive.com/icons/visualpharm/ios7v2/48/Movie-Genres-Comedy-icon.png'
	})



}