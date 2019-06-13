const fdk=require('@fnproject/fdk');

fdk.handle(function(ticketid, message){
  let message = 'empty update'
  if (input.ticketid) {
    ticketid = input.ticketid;
  }
  if (input.message) {
    message = input.message;
  }
  // TODO: need some error handling around input not being passed in
  // TODO: call NetSuite and update the ticket.

  return {'message': 'the ticket update message is: ' + data}
})
