var AWS = require('aws-sdk');
require('es6-shim');
module.exports = function(config) {
	var params = Object.assign({
		Bucket: "phormat",
		Key: "spikes/"
	}, config);

	var s3 = new AWS.S3({
		"logger": process.stdout
	});

	return s3.getObject(params);
}
