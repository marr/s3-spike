var express = require('express');
var router = express.Router();
var server = require('../server.js');
var through = require('through');
var bl = require('bl');

/* GET home page. */
router.get('/', function(req, res) {
    server(null, function( stream ) {
        if( res.err )
        	console.error(err);
        
        stream
        	.pipe(bl(function(err, data) {
        		if (err) {
        			console.error(err);
        		}
        		console.log ('data from route', data);
				res.render('index', {
			        title: 'S3 Bucket Data',
			        data: data
			    });
        	}));
    });
});

module.exports = router;
