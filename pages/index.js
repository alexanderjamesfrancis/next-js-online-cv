import Header from "../componants/page_defaults/Header";
import Footer from "../componants/page_defaults/Footer";
import styles from "../styles/Home.module.css";
import MainHome from "../componants/home/Home";

export default function Home() {
  //const data = employment_data()
  //console.log(data);

  return (
    <div>
      <Header />
      <MainHome />

      <Footer />
    </div>
  );
}
