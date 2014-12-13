var AWS = require('aws-sdk');
require('es6-shim');

module.exports = function(config, callback) {
    var params = Object.assign({
        Bucket: "phormat",
        Key: "spikes/react-drag/index.html"
    }, config);

    var s3 = new AWS.S3({
        "logger": process.stdout
    });
    return s3.getObject(params);
};
