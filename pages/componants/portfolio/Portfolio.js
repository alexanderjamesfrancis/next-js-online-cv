import Header from "../page_defaults/Header";
import Footer from "../page_defaults/Footer";
import portfolioData from "../../api/portfolio_data";
import CardBuilder from "./portfolio componants/portfolio_card_builder";




export default function Portfolio() {

  const data = portfolioData()
  // console.log(data);

  return (
    <div>
      <Header />
      <div id="portfolio-nodes" className="brick">
        <div className="container max-w-6xl mx-auto py-24 px-6 md:px-0">
          <div className="flex flex-col items-center space-y-4 justify-center mb-20 md:justify-center">
            <h2 className="text-4xl text-center uppercase md:text-5xl">
              My Portfolio
            </h2>
            <h5>Hover and click for more info</h5>
          </div>
          <div className="item-container grid grid-rows-3">
            {data.map((item,index) =>{
              return(<CardBuilder data={item} key={index} />)
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
