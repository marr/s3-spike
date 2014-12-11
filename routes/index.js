var express = require('express');
var router = express.Router();
var s3object = require('../s3-module-spike');
require('aws-sdk').config.loadFromPath('./s3config.json');

/* GET home page. */
router.get('/', function(req, res) {
    if(res.err)
        console.error(res.err);

    var spike = new s3object(null, function(data) {

        // data is a readable stream returned from aws-sdk
        // getObject().createReadStream
        console.log ('data from route', data);
        console.log ('data from route', data.toString());

        res.render('index', {
            title: 'S3 Bucket Data',
            data: data.length
        });
     
    });
});

module.exports = router;
