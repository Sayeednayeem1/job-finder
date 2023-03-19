import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Spinner from '../../../ReactSpinner/Spinner';
import Banner from '../Banner/Banner';
import BrowseTopJobs from '../BrowseTopJobs/BrowseTopJobs';
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
            <BrowseTopJobs />
            <TopItCompaniesWorld />
            <WhyAreWeDifferent />
            <Subscribe />
        </div>
    );
};

export default Home;