const fdk=require('@fnproject/fdk')
const http = require("http")
const fetch = require('node-fetch')

// invoke the drone to start flying.

async function callDrone(hostname, remark) {
  //console.log('hostname will be ' + hostname.split('.')[:])
  var options = {
    "method": "POST",
    "hostname": hostname,
    "path": [
      "file",
      "upload",
      ""
    ],
    "headers": {
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Host": hostname,
      "accept-encoding": "gzip, deflate",
      "content-length": "179",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  }

  return new Promise (async function (resolve, reject) {
    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.write("------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"remark \"\r\n" + remark + "\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
    req.end()
  })
}

fdk.handle(function(input){
  var results = {}
  var message = 'Drone triggered to ' + input.hostname + " with remark " + input.remark
  callDrone(input.hostname, input.remark)
  .then(res => {
    console.log("triggered call to proxy " + hostname + " with remark " + remark)
    resolve("Success!")
  })
  .catch(e => {
    console.log("Proxy not triggered properly")
    reject(e)
  })
  return results

})
