import employment_data from "../../api/employment_data";
import BuiltCardList from "./Employment_History_Componants/BuiltCardList";
import Header from "../page_defaults/Header";
import Footer from "../page_defaults/Footer";

import JobCardList from "./Employment_History_Componants/JobCard";
import { useEffect, useState } from "react";

export default function Employment_History() {

  

  const getData = async () => {
    await fetch("/api/employment_data", {
      body: JSON.stringify({
        data: data
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    return body
  } 

  const data = getData


  //setData(employment_data())
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
