var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.getHomePage);
router.get('/projects', mainController.getProjectsPage);

module.exports = router;
