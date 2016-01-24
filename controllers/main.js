var mongoose = require('mongoose');
var events = require('events');
var eventEmitter = new events.EventEmitter;


exports.getHomePage = function(req, res, next){
	res.render('index', { title: 'Ricardo\'s Website' });
}
exports.getProjectsPage = function(req, res, next){
	res.render('projects_list', { title: 'Ricardo\'s Projects' });
}