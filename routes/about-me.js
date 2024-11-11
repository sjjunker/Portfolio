let express = require('express');
let router = express.Router();

/* GET about me page. */
router.get('/', function (req, res, next) {
    res.render('about-me'/*, { title: 'Express' }*/);
});

module.exports = router;