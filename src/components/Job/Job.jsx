import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

const Job = ({ job }) => {
    const {
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        job_type,
        location,
        salary,
    } = job;
    return (
        <div className="border text-start w-4/5 mx-auto p-3 rounded">
            <img className="w-3/12" src={logo} alt="" />
            <p className="text-xl">{job_title}</p>
            <p>{company_name}</p>
            <div className="flex gap-2 my-3">
                <button className="border px-3 py-1 rounded">
                    {remote_or_onsite}
                </button>
                <button className="border px-3 py-1 rounded">{job_type}</button>
            </div>
            <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                    <p>
                        <CiLocationOn />
                    </p>
                    <p className="">{location}</p>
                </div>
                <div className="flex items-center gap-1">
                    <p>
                        <PiCurrencyCircleDollarBold />
                    </p>
                    <p>{salary}</p>
                </div>
            </div>
            <button className="border px-3 py-2 bg-[#6499E9] text-white">
                View Details
            </button>
        </div>
    );
};

export default Job;
