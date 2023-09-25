import React, { useState } from "react";
import Job from "../Job/Job";

const Featured_jobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    fetch("jobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));


    return (
        <div>
            <h2 className="text-4xl font-bold">Featured Jobs</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                similique?
            </p>
            <div className="grid grid-cols-2 gap-4">
                {jobs.slice(0, dataLength).map((job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button className="border rounded px-3 py-2 m-4" onClick={()=> setDataLength(jobs.length)}>Show All</button>
            </div>
        </div>
    );
};

export default Featured_jobs;
