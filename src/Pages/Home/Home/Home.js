import React from 'react';
import Banner from '../Banner/Banner';
import ExperiencedJobs from '../JobsCategory/ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../JobsCategory/FresherJobs/FresherJobs';

const Home = () => {
    return (
        <div>
            <Banner />
            <FresherJobs />
            <ExperiencedJobs></ExperiencedJobs>
        </div>
    );
};

export default Home;