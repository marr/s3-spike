var AWS = require('aws-sdk');

module.exports = function() {
	// var params = {
	// 	Bucket: "phormat",
	// 	Key: "spikes/"
	// };

	var s3 = new AWS.S3({
		"logger": process.stdout
	});

	return s3.getObject(params);
}
