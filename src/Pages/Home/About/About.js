import React, { useEffect } from 'react';
import Image from '../../../assets/Images/man-using-digital-tablet.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    // todo AOS animation
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='max-w-[1440px] mx-auto' data-aos="fade-down" data-aos-easing="linear">
            <div className='mx-4 mt-12 md:mt-32 mb-36'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='mr-0 md:mr-28'>
                        <p className='mb-4'>About Company</p>
                        <h1 className='mb-4 font-bold text-2xl text-black '>We believe, one idea begets others, but one great idea stays stronger above all.</h1>
                        <p className="mb-6">We provide AI-powered marketing-tech solutions. 360-degree solutions to simplify your business <br /> experience. Our solutions are purpose-driven, performance-oriented, and advised by respected <br /> industry experts. We stand out by launching the correct technology with proper communication <br /> integration.</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> Product Engineering</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> IT Consultancy</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> Automated Software</p>
                        <p><span className='text-2xl text-pink-600'>&#10003;</span> Digital Services</p>
                    </div>
                    <div className='mt:6 md:mt-0'>
                        <img className='md:w-[800px] px-5 md:px-0 md:rounded-xl' src={Image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;