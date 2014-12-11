require('aws-sdk').config.loadFromPath('./s3config.json');
var s3object = require('./s3-module-spike');
var through = require('through');
var bl = require('bl');
//var duplexer = require('duplexer');
//var es = require('event-stream');

module.exports = function(err, callback) {
    if (err) 
        console.error(err);

    var spike = new s3object().createReadStream();
        spike
            .pipe(bl(function(err, data) {
                if (err) {
                    console.error(err);
                }
                callback(null, data);
            }));
    
};

