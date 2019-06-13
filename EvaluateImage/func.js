const fdk=require('@fnproject/fdk');

fdk.handle(function(image){
  let message = 'empty image'
  if (input.image) {
    image=input.image;
  }
  // TODO: need some error handling around image input not being passed in
  // pass the image off to OML, OML returns whether it's a fire or not (1 or 0).
  result = 0; // hardcode the result; the image is not one of a fire.
  if (result == 0) {
    message = 'the image is not on fire';
  } else {
    message = 'the image is on fire';
  }
  return {'message': message}
})
