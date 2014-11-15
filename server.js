require('aws-sdk').config.loadFromPath('./s3config.json');
//var duplexer = require('duplexer');
//var es = require('event-stream');

var s3object = require('./s3-module-spike');

module.exports = function(err, callback) {
	if (err) 
		console.error(err);
	
	// async
	callback(s3object().createReadStream());
	
};

