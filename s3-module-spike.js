var AWS = require('aws-sdk');
require('es6-shim');

var bl = require('bl');

module.exports = function(config, callback) {
    var params = Object.assign({
        Bucket: "phormat",
        Key: "spikes/",
    }, config);

    var s3 = new AWS.S3({
        "logger": process.stdout
    });

    s3.getObject(params, function(err, data) {
        if (err) throw err;
        callback(data);
    });
}
