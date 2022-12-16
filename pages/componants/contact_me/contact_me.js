import Header from "../page_defaults/Header";
import Footer from "../page_defaults/Footer";

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
      </div>
      <Footer />
    </div>
  );
}
