import employment_data from "./Employment_History_Componants/employment_data";
import JobCardList from "./Employment_History_Componants/JobCard";

export default function Employment_History() {
  const data = employment_data();

  return (
  <div>
    <JobCardList data ={data}/>
  </div>
)}
