import sendGrid from "@sendgrid/mail"

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req,res){
    try{
        await sendGrid.send({
            to: "alexanderjamesfrancis@hotmail.co.uk", // Change to your recipient
            from: "alexthebigfishmk2@gmail.com", // Change to your verified sender
            subject: "This is a test email to see if this works",
            text: "Read this and then see what happens",
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        })
    }
    catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json({ error: "" });
}


export default sendEmail;