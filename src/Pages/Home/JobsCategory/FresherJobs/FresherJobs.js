import React from 'react';
import FresherJob from './FresherJob';
import Dev1 from '../../../../assets/Images/Fresher-Job-Assets/Dev1.svg';
import Dev2 from '../../../../assets/Images/Fresher-Job-Assets/Dev2.svg';
import Dev3 from '../../../../assets/Images/Fresher-Job-Assets/Dev3.svg';
import Dev4 from '../../../../assets/Images/Fresher-Job-Assets/Dev4.svg';
import Dev5 from '../../../../assets/Images/Fresher-Job-Assets/Dev5.svg';
import Dev6 from '../../../../assets/Images/Fresher-Job-Assets/Dev6.svg';
import { Link } from 'react-router-dom';

const FresherJobs = () => {


    const fresherJobsData = [
        {
            id: 1,
            name: "Front-End Development",
            location: "Dhaka",
            companyName: "IT Farm Tech",
            logo: Dev1
        },
        {
            id: 2,
            name: "Back-End Development",
            location: "Chittagong",
            companyName: "IT Farm Tech",
            logo: Dev2,
        },
        {
            id: 3,
            name: "React.js Development",
            location: "Sylhet",
            companyName: "IT Farm Tech",
            logo: Dev3,
        },
        {
            id: 4,
            name: "FullStacK Development",
            location: "Barisal",
            companyName: "IT Farm Tech",
            logo: Dev4,
        },
        {
            id: 5,
            name: "Node.js Development",
            location: "Rajshahi",
            companyName: "IT Farm Tech",
            logo: Dev5,
        },
        {
            id: 6,
            name: "Next.js Development",
            location: "Khulna",
            companyName: "IT Farm Tech",
            logo: Dev6
        }
    ];

    return (
        <div className='mt-24 mb-16'>
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-5'>Discover Jobs For You</h1>
                    <p className='text-[#176CCF] font-bold'>Browse 200+ Top Jobs For The Freshers!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto px-5 md:px-0 mt-12'>
                    {
                        fresherJobsData.map(data => <FresherJob
                            key={data.id}
                            data={data}
                        ></FresherJob>)
                    }
                </div>
                <div className='flex items-center justify-center mt-8 md:mt-12'>
                    <Link to='/'><input className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" value='See All Jobs' readOnly type="text" /></Link>
                </div>
            </div>
        </div>
    );
};

export default FresherJobs;