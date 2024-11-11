var express = require('express');
var router = express.Router();

/* GET project details page. */
router.get('/', function (req, res, next) {
    res.render('project-details'/*, { title: 'Express' }*/);
});

module.exports = router;