import React from 'react';

const Job = ({job}) => {
    const {logo, job_title, company_name} = job;
    return (
        <div className='border text-start w-4/5 mx-auto p-3'>
            <img className='w-3/12' src={logo} alt="" />
            <p className='text-xl'>{job_title}</p>
            <p>{company_name}</p>
            <button className='border px-3 py-2 bg-[#6499E9] text-white'>View Details</button>
        </div>
    );
};

export default Job;