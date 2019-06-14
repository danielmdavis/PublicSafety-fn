const fdk = require('@fnproject/fdk')

fdk.handle(function (input) {
  let max_temp = 45
  let message = 'just chillin'
  let netsuite = ''

  var request = require("request");
  var options = {
    method: 'POST',
    url: 'http://localhost:8080/t/PublicSafety/openticket',
    headers: {
      'Postman-Token': '445bc6c7-88e9-40ac-85d7-16cc5a71b1b5',
      'cache-control': 'no-cache'
    },
    body: {"data":input.temp}
  }
  request(options, function (error, response, body) {
    netsuite = body
    if (error) throw new Error(error);
    console.log(body);
  })

  if (input.temp > max_temp) {
    message = 'FIRE???'
  }

  let output = message + ' ' + netsuite

  return { output }
})
