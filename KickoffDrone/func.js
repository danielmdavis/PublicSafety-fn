const fdk=require('@fnproject/fdk')
const http = require('http')
const fetch = require('node-fetch')
const FormData = require('form-data')

// invoke the drone to start flying.

async function callDrone(hostname, remark) {
  const form = new FormData()
  form.append('remark', remark)

  var uri = 'http://' + hostname + '/file/upload/'

  //console.log('hostname will be ' + hostname.split('.')[:])
  const options = {
    method: 'POST',
    body: form
  }
//    "headers": {
//      "content-type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
//      "Content-Type": "application/x-www-form-urlencoded",
//      "Accept": "*/*",
//      "Cache-Control": "no-cache",
//      "Host": hostname,
//      "accept-encoding": "gzip, deflate",
//      "content-length": "179",
//      "Connection": "keep-alive",
//      "cache-control": "no-cache"
//    }
//  }

  return new Promise( async function (resolve, reject) {
    await fetch(uri, options)
      .then(function(res) {
        myJSON = res.json()
//        console.log("callDrone: JSON is " + myJSON)
//        return myJSON
      })
      .then(function(json) {resolve(json) })
      .catch(e => {
        console.log('error in callDrone: ' + e)
        reject(e)
      })
  })

}

fdk.handle(function(input){
  var results = {}
  var message = 'Drone triggered to ' + input.hostname + " with remark " + input.remark
  callDrone(input.hostname, input.remark)
  .then(res => {
     results = "KickoffDrone: Handler triggered call to proxy " + hostname + " with remark " + remark
  })
  .catch(e => {
     results = "KickoffDrone: proxy not triggered properly"
  })
  console.log(results)

})
