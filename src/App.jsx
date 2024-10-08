import { useEffect, useState } from "react";

import  JobInfo  from "./JobInfo";
import Button from "./Button";

const url = 'https://course-api.com/react-tabs-project';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  //current item
const fetchJobs = async () => {
  const response = await fetch('/api/react-tabs-project')
  const newJobs = await response.json()
  setJobs(newJobs);
  setIsLoading(false)
}
  useEffect(() => {
    fetchJobs();
  }, []);
  
  if(isLoading){
    return( 
    <section className="jobs-center">
      <div className="loading"></div>
    </section>
    )
  }
  return( 
    <section className="jobs-center">
    <Button jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  )
};
export default App;
