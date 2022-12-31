import Header from "../page_defaults/Header";
import Footer from "../page_defaults/Footer";
import Image from "next/image";

export default function Contact_Me() {
  return (
    <div>
      <Header />
      <div class="flex flex-col items-center justify-center space-y-6 pwt-32 pb-96 brick">
        <div>
          <h1 class="font-bold underline underline-offset-1 text-4xl p-6">
            My Contact Details
          </h1>
        </div>

        <div class="space-y-4 p6 font-semibold text-center mb-40">
          <p>Alex Francis</p>
          <p>Home Address: Hucknall, Nottingham.</p>
          <p>Mobile: 07985 921903</p>
          <p>E-mail: alexanderjamesfrancis@hotmail.co.uk</p>
        </div>
        <div>
          <div className="items-center">
            <h4>Send me a message!</h4>
          </div>
          <div className="">
            <form className="flex flex-col items-center">
              <div className="form-item">
                <label>Your Name</label>
                <input className="rounded-md border-2" type="text" required />
              </div>
              <div className="form-item">
                <label>Email</label>
                <input type="text" required/>
              </div>
              <div className="form-item">
                <label>Contact Number</label>
                <input type="text" required/>
              </div>
              <div className="form-item">
                <label>Your Message</label>
                <textarea rows="4" required />
              </div>
              <div className="flex flex-row space-x-2 bg-white hover:bg-black transition ease-in hover:text-white border-2 m-4 px-6 py-2 border-black rounded-full">
                <button className="" formMethod="POST" type="submit">Submit</button>
                <Image className="hover:hidden" width="20" height="20" src="/icons/envelope-solid.svg"/>

              </div>
              
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
