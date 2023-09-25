import React from 'react';
import Banner from '../Banner/Banner';
import Job_category_list from '../Job_category_list/Job_category_list';
import Featured_jobs from '../Featured_jobs/Featured_jobs';

const Home_page = () => {
    return (
        <div>
            <Banner></Banner>
            <Job_category_list></Job_category_list>
            <Featured_jobs></Featured_jobs>
        </div>
    );
};

export default Home_page;