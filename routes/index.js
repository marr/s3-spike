var express = require('express');
var router = express.Router();
var phormat = require('../s3-module-spike');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(res.err)
        console.error(res.err);

   phormat()
        .createReadStream()
        .pipe(res);

    //next();
});

module.exports = router;
