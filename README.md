s3-spike
========
Create a file in the root named `s3config.json`. 
Add s3 connection data like so:
```
{
    "accessKeyId": "xxxx",
    "secretAccessKey": "xxxx"
}
```

Also, update the params section of `s3-module-spike.js`, or pass in
values with usage of the module.
```
var params = {
    Bucket: "phormat",
    Key: "spikes/"
};
```
Replace these with a bucket and key (directory) for your S3 bucket.

Install and run
```
npm install
DEBUG=s3-spike bin/www
```
