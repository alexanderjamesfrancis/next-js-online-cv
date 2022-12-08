import employment_data from "./Employment_History_Componants/employment_data";

import JobCardList from "./Employment_History_Componants/JobCard";

export default function Employment_History() {
  const data = employment_data();
  console.log(data)
  return (
  <div>
    {data.map((item, index) => {
      return(
      <JobCardList data={item} key={index}/>
    )})}
    
  </div>
)}
