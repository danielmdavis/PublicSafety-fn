const fdk=require('@fnproject/fdk');
const request=require('request');


function RESTcaller (inputId, context) {
  var options = {
    method: 'POST',
    uri: 'https://BurlingtonHUB-orasenatdpltintegration01.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/PUBLIC_SAFETY_V2/1.0/metadata/ticket',
    headers:
    {
      'Postman-Token': 'e254cfd3-723c-4eea-a50c-4bf03d4dce0a',
      'cache-control': 'no-cache',
      'Authorization': 'Basic Y2xvdWQuYWRtaW46I0FCQ0RlZmdoMTIzNCM=',
      'Content-Type': 'application/json'
    },
    body:
    {
      timestamp: '13-06-19',
      temperature: '489.2',
      location: 'Burlington, MA',
      id: inputId,
      status: '1'
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


// When I call RESTcaller(223) by itself, it runs appropriately.
// When I wrap it in fdk.handle (as below), the request happens, but the function never returns.

fdk.handle(function (input, ctx) {
  return RESTcaller(input);
});
