let express = require('express');
let router = express.Router();

/* GET project details page. */
router.get('/', function (req, res, next) {
    res.render('project-details'/*, { title: 'Express' }*/);
});

module.exports = router;