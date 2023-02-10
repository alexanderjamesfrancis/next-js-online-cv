// import {employmentdata} from "../../api/employment_data"
import BuiltCardList from "../../componants/Employment_History_Componants/BuiltCardList";
import Header from "../../componants/page_defaults/Header";
import Footer from "../../componants/page_defaults/Footer";

import JobCardList from "../../componants/Employment_History_Componants/JobCard";
import { useEffect, useState } from "react";

export default function Employment_History() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const response = await fetch("/api/employment/employment_data_handler");
    setData(await response.json());
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <Header />
      <div className="brick">
        <div className="items-center justify-center text-center">
          <h1 className="text-xl p-6 font-bold">Employment History</h1>
          <div>
            {data.map((item, index) => {
              return <JobCardList data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
