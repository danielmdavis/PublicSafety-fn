const fdk=require('@fnproject/fdk');
const request=require('request');


function RESTcaller (inputId, context) {
  var options = {
    method: 'POST',
    uri: 'https://burlingtonhub-orasenatdpltintegration01.integration.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/DRONETRIGGER/1.0/dronetrigger',
    headers:
    {
      'cache-control': 'no-cache',
      'Authorization': 'Basic Y2xvdWQuYWRtaW46I0FCQ0RlZmdoMTIzNCM=',
      'Content-Type': 'application/json'
    },
    body:
    {
      "Location":"Building1",
      "Temperature1":"45",
      "TimeStamp":"12:12:12"
    },
    json: true
  };

  return new Promise( function (resolve, reject) {
    request(options, function (error, response, body) {
      if (err) return reject(err);
      try {
        resolve(body);
      } catch(e) {
        reject(e);
      }
    });
  });
}


fdk.handle(function (input, ctx) {
  return RESTcaller(input);
});
