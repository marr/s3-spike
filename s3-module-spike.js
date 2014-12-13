var AWS = require('aws-sdk');
require('es6-shim');

AWS.config.loadFromPath('./s3config.json');

var s3 = new AWS.S3({
    "logger": process.stdout
});

module.exports = function(config) {
    config = Object.assign({
        Bucket: "phormat"
    }, config);
    return s3.listObjects(config);
};

