const fdk=require('@fnproject/fdk');
const request=require('request');
const fs=require('fs');

// Evaluate the drone's image and find out whether it looks like a fire.
// curl -X POST --noproxy '*' http://132.145.211.255:9093/oaa-scoring/services/v1/myservices/adapted_1/score  -F  "imageData=@$i" -H "Content-Type: multipart/form-data; boundary=BOUNDARY" -H "Accept: application/json" -w "   \n\n\n\n"


function POSTcaller (inputFileName, inputFileData, context) {
  var options = {
    method: 'POST',
    uri: 'http://132.145.211.255:9093/oaa-scoring/services/v1/myservices/adapted_1/score',
    headers:
    {
      'cache-control': 'no-cache',
//      'Authorization': 'Basic Y2xvdWQuYWRtaW46I0FCQ0RlZmdoMTIzNCM=',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
      'Accept': 'application/json'
    },
    formData:
      { imageData:
        { value: inputFileData,
        options:
        { filename: inputFileName,
          contentType: null }
      }
    }
  };

  return new Promise( function (resolve, reject) {
    request(options, function (error, response, body) {
      if (error) {
        console.log("error in request: " + error)
        return reject(error)
      }
      try {
        console.log("body received:" + body)
        resolve(body);
      } catch(e) {
        console.log("error in catch: " + e)
        reject(e)
      }
    })
  })
}

function download (uri, filename, callback) {
  request.head(uri, function(err, res, body){
    if (err) {
      console.log('Error getting '+ uri + ' : ' + err)
    } else {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    }
  })
}



fdk.handle(async function (input, ctx) {
  console.log('received input ' + input)
  var inputFileURL = String(input.imageurl);
  var inputFileName = '/tmp/' + inputFileURL.substring(inputFileURL.lastIndexOf('/')+1);
  console.log('downloading image from ' + inputFileURL + ' to ' + inputFileName);

  // save image to local filesystem

  var retval = ''
  download(inputFileURL, inputFileName, await function() {
    console.log('downloaded image successfully')
  })
  // and then read it back out
  var inputFileData = await fs.createReadStream(inputFileName)
  console.log("Trying to recognize " + inputFileName)

  retval = await POSTcaller(inputFileName, inputFileData)
  console.log("retval is " + retval)
  return retval
})
