var express = require('express');
var router = express.Router();
var phormat = require('..');

var XmlStream = require('xml-stream');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(res.err)
        console.error(res.err);

    var stream = phormat.bucketlist().createReadStream();

    var xml = new XmlStream(stream, 'utf8');
    xml.on('text: Name', function(bucket) {

        var name = bucket.$text;
        res.render('index', {
            title: name + ' Bucket Data',
            data: { zip: 'ab' }
        });
    });
    xml.on('error', function(message) {
        console.error('xml-stream', message);
    });
});

module.exports = router;
