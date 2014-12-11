var express = require('express');
var router = express.Router();
var server = require('../server.js');


/* GET home page. */
router.get('/', function(req, res) {
    if(res.err)
        console.error(res.err);

    server(null, function(err, data) {
        if (err) {
            console.error(err);
            throw err;
        }
        // data is a readable stream returned from aws-sdk
        // getObject().createReadStream
        console.log ('data from route', data.toString());

        res.render('index', {
            title: 'S3 Bucket Data',
            data: data.length
        });
     
    });
});

module.exports = router;
