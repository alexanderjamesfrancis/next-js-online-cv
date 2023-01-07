const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "alexthebigfishmk2@gmail.com", // Change to your recipient
  from: "alexanderjamesfrancis@hotmail.co.uk", // Change to your verified sender
  subject: "This is a test email to see if this works",
  text: "Read this and then see what happens",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
