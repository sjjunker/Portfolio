let express = require('express');
let router = express.Router();

/* GET contact page. */
router.get('/', function (req, res, next) {
    res.render('contact'/*, { title: 'Express' }*/);
});

module.exports = router;