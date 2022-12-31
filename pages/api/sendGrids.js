


export default function whatsAppDispatch(msgBody){

    const twilio_phone = "+19854647988"

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello there!',
         to: 'whatsapp:+15005550006'
       })
      .then(message => console.log(message.sid));







}