import React, { useEffect } from 'react';
import Dev1 from '../../../../assets/Images/Experienced-Job-Assets/Dev1.svg';
import Dev2 from '../../../../assets/Images/Experienced-Job-Assets/Dev2.svg';
import Dev3 from '../../../../assets/Images/Experienced-Job-Assets/Dev3.svg';
import Dev4 from '../../../../assets/Images/Experienced-Job-Assets/Dev4.svg';
import Dev5 from '../../../../assets/Images/Experienced-Job-Assets/Dev5.svg';
import Dev6 from '../../../../assets/Images/Experienced-Job-Assets/Dev6.svg';
import ExperiencedJob from './ExperiencedJob';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const ExperiencedJobs = () => {

    // todo banner animation
    useEffect(() => {
        Aos.init({ duration: 2000 }, () => {
            Aos.refresh();
        });
    }, []);

    const experiencedJobsData = [
        {
            id: 1,
            name: "Python Development",
            location: "Dhaka",
            companyName: "Nay Tech Org",
            logo: Dev1
        },
        {
            id: 2,
            name: "Senior Instructor React.js",
            location: "Chittagong",
            companyName: "Nay Tech Org",
            logo: Dev2,
        },
        {
            id: 3,
            name: "React.js Development",
            location: "Sylhet",
            companyName: "Nay Tech Org",
            logo: Dev3,
        },
        {
            id: 4,
            name: "wordpress Development",
            location: "Barisal",
            companyName: "Nay Tech Org",
            logo: Dev4,
        },
        {
            id: 5,
            name: "MERN STACK Development",
            location: "Rajshahi",
            companyName: "Nay Tech Org",
            logo: Dev5,
        },
        {
            id: 6,
            name: "Nest.js Development",
            location: "Khulna",
            companyName: "Nay Tech Org",
            logo: Dev6
        }
    ];

    return (
        <div>
            <div className='mt-24 mb-16' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="linear">
                <div>
                    <div className='text-center'>
                        <h1 className='text-5xl font-bold mb-5'>Discover Jobs For You</h1>
                        <p className='text-[#176CCF] font-bold'>Browse 300+ Top Jobs For The Experienced!</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto px-5 md:px-0 mt-12'>
                        {
                            experiencedJobsData.map(data => <ExperiencedJob
                                key={data.id}
                                data={data}
                            ></ExperiencedJob>)
                        }
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-8 md:mt-12'>
                <Link to='/'><input className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" value='See All Jobs' readOnly type="text" /></Link>
            </div>
        </div>
    );
};

export default ExperiencedJobs;