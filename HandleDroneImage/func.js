const fdk=require('@fnproject/fdk');

// The drone hits this function and passes an image and a ticketid.
// This handles the image and updates the ticket.

fdk.handle(function(image, ticketid){
  let message = 'empty image'
  if (input.image) {
    image=input.image;
  }
  // invoke the function EvaluateImage
  // invoke the function UpdateTicket with the results

  return {'message': 'ticket updated with image from site'}
})
