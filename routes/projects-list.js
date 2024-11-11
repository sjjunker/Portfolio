var express = require('express');
var router = express.Router();

/* GET projects list page. */
router.get('/', function (req, res, next) {
    res.render('projects-list'/*, { title: 'Express' }*/);
});

module.exports = router;