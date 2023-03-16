import React from 'react';
import Banner from '../Banner/Banner';
import BuildJobBoard from '../BuildJobBoard/BuildJobBoard';
import ExperiencedJobs from '../JobsCategory/ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../JobsCategory/FresherJobs/FresherJobs';

const Home = () => {
    return (
        <div>
            <Banner />
            <FresherJobs />
            <BuildJobBoard />
            <ExperiencedJobs></ExperiencedJobs>
        </div>
    );
};

export default Home;