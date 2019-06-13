const fdk=require('@fnproject/fdk');

fdk.handle(function(input){
  let data = 'no input received'
  if (input.data) {
    data = input.data;
  }
  return {'message': 'the recorded temp is: ' + name}
})
