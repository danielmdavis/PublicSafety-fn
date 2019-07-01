const fdk=require('@fnproject/fdk');
const request=require('request');
const fs=require('fs');

// Evaluate the drone's image and find out whether it looks like a fire.
// curl -X POST --noproxy '*' http://132.145.211.255:9093/oaa-scoring/services/v1/myservices/adapted_1/score  -F  "imageData=@$i" -H "Content-Type: multipart/form-data; boundary=BOUNDARY" -H "Accept: application/json" -w "   \n\n\n\n"


function POSTcaller (inputId, context) {
  var options = {
    method: 'POST',
    uri: 'http://132.145.211.255:9093/oaa-scoring/services/v1/myservices/adapted_1/score',
    headers:
    {
      'cache-control': 'no-cache',
//      'Authorization': 'Basic Y2xvdWQuYWRtaW46I0FCQ0RlZmdoMTIzNCM=',
      'Content-Type': 'multipart/form-data; boundary=BOUNDARY',
      'Accept': 'application/json'
    },
    formData:
    {
      imageData:fs.createReadStream('cat.png')
    },
    body:
    {
    },
    json: true
  };

  return new Promise( function (resolve, reject) {
    request(options, function (error, response, body) {
      if (error) {
        console.log("error in request: " + err);
        return reject(error);
      }
      try {
        resolve(body);
      } catch(e) {
        console.log("error in catch: " + e);
        reject(e);
      }
    });
  });
}



fdk.handle(function (input, ctx) {
  return POSTcaller(input);
});
