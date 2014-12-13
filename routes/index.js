var express = require('express');
var router = express.Router();
var s3object = require('../s3-module-spike');
require('aws-sdk').config.loadFromPath('./s3config.json');

var through = require('through');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(res.err)
        console.error(res.err);

    s3object()
        .createReadStream().pipe(res);

    //next();
});

module.exports = router;
