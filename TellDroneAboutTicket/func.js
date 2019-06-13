const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  let data = 'no ticket number received'
  if (input.data) {
    data = input.data;
  }
  // tell the drone the ticket number.
  
  return {'message': 'the ticket number is: ' + data}
})
