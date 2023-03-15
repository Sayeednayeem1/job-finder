import React from 'react';
import banner from '../../../assets/Images/Banner.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <header>
            <div className='my-16'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                        <div>
                            <p className='mb-4'>We have 850,000 great job offers you deserve!</p>
                            <h1 className="text-5xl font-bold">Find The Most Exciting</h1>
                            <h1 className="text-5xl font-bold mt-2">Startup Jobs</h1>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;