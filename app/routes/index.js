var express = require('express');
var router = express.Router();
var phormat = require('phormat');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(res.err)
        console.error(res.err);

    phormat.pipe(res);
});

module.exports = router;
