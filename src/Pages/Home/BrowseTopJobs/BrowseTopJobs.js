import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BrowseTopJobs = () => {

    // todo banner animation
    useEffect(() => {
        Aos.init({ duration: 2000 }, () => {
            Aos.refresh();
        });
    }, []);

    return (
        <div className='bg-blue-600' data-aos="zoom-in" data-aos-easing="linear" data-aos-delay="500">
            <div className='max-w-[1440px] mx-5 md:mx-auto md:my-28 text-center py-10 text-white'>
                <h1 className='text-7xl font-bold'>1000+</h1>
                <h1 className='text-4xl font-bold mt-4'>Browse From Our Top Jobs</h1>
                <p className='text-xl mt-4 opacity-70'>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
            </div>
        </div>
    );
};

export default BrowseTopJobs;