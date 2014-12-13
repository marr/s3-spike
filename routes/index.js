var express = require('express');
var router = express.Router();
var s3object = require('../s3-module-spike');
require('aws-sdk').config.loadFromPath('./s3config.json');

var through = require('through');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(res.err)
        console.error(res.err);

    var spike = new s3object();

    spike
        .createReadStream()
        .pipe(res);

    //next();
});

module.exports = router;
