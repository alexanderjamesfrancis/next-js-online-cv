import About_Me_Body_Text from "./about_me_componants/about_me_body";
import About_Me_Hobbies from "./about_me_componants/about_me_hobbies";
import About_me_skills from "./about_me_componants/about_me_skills";
import Header from "../page_defaults/Header";
import Footer from "../page_defaults/Footer";

export default function AboutMe() {
  return (
    <div>
      <Header />
      <div className="brick items-center justify-center">
        <About_Me_Body_Text />
        <About_me_skills />
        <About_Me_Hobbies />
      </div>
      <Footer />
    </div>
  );
}
