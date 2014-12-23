var test = require('tape');
var xml = require('../lib/xml-reader');
//var spike = require('phormat');
//var spike = fs.
test('we can load some xml', function(t) {
    t.plan(1);
    xml('./fixtures/bucket.xml', function( err, data ) {
        t.ok(data);
    });
});
test('we can render some xml', function(t) {
    t.plan(2);
    xml('./fixtures/bucket.xml', function( err, data ) {
        t.is(null, err);
        t.is('phormat', data.Name);
    });
});
//test('s3 spike loads some bucket data', function(t) {
    //t.plan(1);

    //spike(function(data) {
        //console.log(data);
        //t.ok(data);
    //});
    ////t.ok(spike instanceof "Stream", "spike is a stream");
//});

