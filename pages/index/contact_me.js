import Header from "../../componants/page_defaults/Header";
import Footer from "../../componants/page_defaults/Footer";
import Image from "next/image";
import { useState } from "react";
import SendButton from "../../componants/contact_me_componants/sendButton";


//import send_email from "../../api/contact_me_email";

export default function Contact_Me() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Setting Button Text
  //const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [showFailureMessage, setShowFailureMessage] = useState(false);

  // "Send" Button change if clicked toggle
  const [sendButton, setSendButton] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact_me_email", {
      body: JSON.stringify({
        email: email,
        fullName: fullName,
        contact: contact,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    setSendButton(true)
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center space-y-6 pwt-32 pb-96 brick">
        <div>
          <h1 className="font-bold underline underline-offset-1 text-4xl p-6">
            My Contact Details
          </h1>
        </div>

        <div className="space-y-4 p6 font-semibold text-center mb-40">
          <p>Alex Francis</p>
          <p>Home Address: Hucknall, Nottingham.</p>
          <p>Mobile: 07985 921903</p>
          
        </div>
        <div>
          <div className="flex justify-center">
            <h4 className="">Send me a message!</h4>
          </div>
          <div className="">
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <div className="form-item">
                <label>Your Name</label>
                <input
                  className="rounded-md border-2"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  name="fullName"
                  required
                />
              </div>

              <div className="form-item">
                <label>Email</label>
                <input
                className="rounded-md border-2"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  required
                />
              </div>
              <div className="form-item">
                <label>Contact Number</label>
                <input
                className="rounded-md border-2"
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                  name="contact"
                  required
                />
              </div>
              <div className="form-item">
                <label>Your Message</label>
                <textarea
                className="rounded-md border-2"
                  rows="4"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  name="message"
                  required
                />
              </div>
              <SendButton click={sendButton} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
