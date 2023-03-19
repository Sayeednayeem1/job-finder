import React, { useEffect } from 'react';
import company1 from '../../../assets/Images/Experienced-Job-Assets/Dev1.svg';
import company2 from '../../../assets/Images/Experienced-Job-Assets/Dev2.svg';
import company3 from '../../../assets/Images/Experienced-Job-Assets/Dev3.svg';
import TopItCompanyWorld from './TopItCompanyWorld';
import Aos from 'aos';
import 'aos/dist/aos.css';

const TopItCompaniesWorld = () => {

    // todo banner animation
    useEffect(() => {
        Aos.init({ duration: 2000 }, () => {
            Aos.refresh();
        });
    }, []);

    const topItCompanyData = [
        {
            id: 1,
            name: "Microsoft Corporation",
            location: "Washington",
            logo: company1
        },
        {
            id: 2,
            name: "IBM",
            location: "Armonk, Future York",
            logo: company2,
        },
        {
            id: 3,
            name: "Oracle",
            location: "Redwood Shores, California",
            logo: company3,
        }
    ];

    return (
        <div className='mt-24 mb-16' data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500">
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-5'>Top IT Companies Worldwide</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto px-5 md:px-0 mt-12'>
                    {
                        topItCompanyData.map(data => <TopItCompanyWorld
                            key={data.id}
                            data={data}
                        ></TopItCompanyWorld>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopItCompaniesWorld;