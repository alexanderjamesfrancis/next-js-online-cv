import sendGrid from "@sendgrid/mail"

sendGrid.setApiKey(process.env.ANOTHER_API_KEY);

async function sendEmail(req,res){
    //console.log("You got this far");
    //console.log("1." + res.statusCode);
    try{
        //console.log("Its trying to do the thing");
        await sendGrid.send({
            to: "alexanderjamesfrancis@hotmail.co.uk", // Change to your recipient
            from: "alexthebigfishmk2@gmail.com", // Change to your verified sender
            subject: "Your have received a message from your website",
            text: "Cheese", 
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        })
        //console.log("It did the thing");
    }
    catch (error) {
        //console.log("2." + res.statusCode);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    //console.log(res.status);
    //console.log("3." + res.statusCode);
    return res.status(200).json({ error: "" });
}


export default sendEmail;