var fs = require('fs');
var path = require('path');
var xml2json = require('xml2json');

module.exports = function(filename, loadFunc) {
    this.loaded = function(data) {
        //process.stdout.write(data);
    };
    filename = path.join( process.cwd(), 'test',  filename);
    return fs.readFile(filename, function(err, data) {
        if (err) throw err;
        this.loaded(data);
        
        var json = JSON.parse(xml2json.toJson(data));
        var bucket = json.ListBucketResult;
        if (loadFunc) loadFunc(err, bucket);
    });
};
