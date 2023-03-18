import React from 'react';
import Banner from '../Banner/Banner';
import BuildJobBoard from '../BuildJobBoard/BuildJobBoard';
import ExperiencedJobs from '../JobsCategory/ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../JobsCategory/FresherJobs/FresherJobs';
import Subscribe from '../Subscribe/Subscribe';
import TopItCompanies from '../TopItCompanies/TopItCompaniesBD';
import TopItCompaniesWorld from '../TopItCompanyWorld/TopItCompaniesWorld';
import WhyAreWeDifferent from '../WhyAreWeDifferent/WhyAreWeDifferent';

const Home = () => {
    return (
        <div>
            <Banner />
            <FresherJobs />
            <BuildJobBoard />
            <ExperiencedJobs />
            <TopItCompanies />
            <TopItCompaniesWorld />
            <WhyAreWeDifferent />
            <Subscribe />
        </div>
    );
};

export default Home;