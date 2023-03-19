import React from 'react';
import banner from '../../../assets/Images/Banner.jpg';

const Banner = () => {

    return (
        <header>
            <div className='my-16'>
                <div className="hero" >
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                        <div>
                            <p className='mb-4'>We have 850,000 great job offers you deserve!</p>
                            <h1 className="text-5xl font-bold">Find The Most Exciting</h1>
                            <h1 className="text-5xl font-bold mt-2">Startup Jobs</h1>
                            <form className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8 p-0 lg:p-5 shadow-xl rounded-xl'>
                                <input type="text" placeholder="Job Title" className="input w-full max-w-xs" />
                                <input type="text" placeholder="Category" className="input w-full max-w-xs" />
                                <input type="text" placeholder="Location" className="input w-full max-w-xs" />
                                <input className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" readOnly value='Search' type="text" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;