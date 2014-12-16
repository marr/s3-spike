var express = require('express');
var router = express.Router();
var phormat = require('..');

var bl = require('bl');
var parser = require('xml2json');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(res.err)
        console.error(res.err);

    
    phormat()
        .createReadStream()
        .pipe(bl(function(err, data) {
            console.log(data);
            var xml = data.toString();

            data = JSON.parse(parser.toJson(xml));
            
            res.render('index', {
                title: 'S3 Bucket Data',
                data: data
            });
        }));
        //.pipe(res);

    //next();
});

module.exports = router;
