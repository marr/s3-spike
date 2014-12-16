var test = require('tape');
var spike = require('../..');
var XmlStream = require('xml-stream');

test('s3 spike loads some bucket data', function(t) {
    t.plan(1);

    var stream = new XmlStream(spike.bucketlist().createReadStream());
    stream.on('text: Name', function(bucket) {
        t.is(bucket.$text, 'phormat', 'bucket is returned from xml');
    });

    stream.on('data', function(data) {
        //process.stdout.write(data);
    });
});

