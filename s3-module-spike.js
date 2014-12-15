var AWS = require('aws-sdk');
require('es6-shim');

AWS.config.loadFromPath(__dirname + '/s3config.json');

var s3 = new AWS.S3({
    "logger": process.stdout
});

module.exports = function(config) {
    
    // Load config
    config = Object.assign({
        Bucket: "phormat"
    }, config);

    // Load object
    if (config.Key) {
        return s3.getObject(config);
    }

    // List bucket
    return s3.listObjects(config);
};

