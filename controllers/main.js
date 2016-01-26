var mongoose = require('mongoose');
var events = require('events');
var eventEmitter = new events.EventEmitter;


exports.getHomePage = function(req, res, next){
	res.render('index', { title: 'Ricardo\'s Website' });
}
exports.getProjectsPage = function(req, res, next){
	res.render('projects_list', { title: 'Ricardo\'s Projects' });
}
exports.getResume = function(req, res, next){
	var filename = "Terrazas_Job_Resume.pdf";
	var dirname = "/pdfs/";
	file = dirname + filename;
	console.log("__dirname");

	console.log(__dirname);
	var options = {
		root: __dirname + '/../public/pdfs/',
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	};

	res.sendFile(filename, options, function (err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('Sent:', filename);
		}
	});
	//res.render('projects_list', { title: 'Ricardo\'s Projects' });
	//res.attachment(file);
}