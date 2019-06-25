const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
 
  var request = require("request");

  var options = {
    method: 'POST',
    url: 'https://BurlingtonHUB-orasenatdpltintegration01.integration.ocp.oraclecloud.com:443/ic/api/integration/v1/flows/rest/PUBLIC_SAFETY_V2/1.0/metadata/ticket',
    headers:
    {
      'Postman-Token': 'e254cfd3-723c-4eea-a50c-4bf03d4dce0a',
      'cache-control': 'no-cache',
      Authorization: 'Basic Y2xvdWQuYWRtaW46I0FCQ0RlZmdoMTIzNCM=',
      'Content-Type': 'application/json'
    },
    body:
    {
      timestamp: '13-06-19',
      temperature: '489.2',
      location: 'Burlington, MA',
      id: '211',
      status: '1'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });

  return {body}
})
