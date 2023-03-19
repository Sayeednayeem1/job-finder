import React from 'react';
import Image from "../../../assets/Images/Why-Different/Why-Different.jpg";
import icon1 from '../../../assets/Images/Why-Different/icon1.svg';
import icon2 from '../../../assets/Images/Why-Different/icon2.svg';
import icon3 from '../../../assets/Images/Why-Different/icon3.svg';

const WhyAreWeDifferent = () => {

    return (
        <div className='bg-blue-50 py-28'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex flex-col md:flex-row  justify-between'>
                    <div className=''>
                        <div className='mb-12 px-5 md:px-0'>
                            <h1 className='text-4xl font-bold mb-4'>Why we are different</h1>
                            <p className='opacity-70 text-xl'>We collect reviews from our users so you can get an honest opinion <br /> of what an experience with our website.</p>
                        </div>
                        <div className='flex flex-col md:flex-row items-center text-2xl mb-6 px-5 md:px-0'>
                            <img className='mr:0 md:mr-6 w-24' src={icon1} alt="" />
                            <p className='opacity-70 text-xl'>Keep your cool. Get on-demand help to on- <br /> demand make the best offer.</p>
                        </div>
                        <div className='flex flex-col md:flex-row items-center text-2xl mb-6 px-5 md:px-0'>
                            <img className='mr:0 md:mr-6 w-24' src={icon2} alt="" />
                            <p className='opacity-70 text-xl'>Keep your cool. Get on-demand help to on- <br /> demand make the best offer.</p>
                        </div>
                        <div className='flex flex-col md:flex-row items-center text-2xl mb-6 px-5 md:px-0'>
                            <img className='mr:0 md:mr-6 w-24' src={icon3} alt="" />
                            <p className='opacity-70 text-xl'>Keep your cool. Get on-demand help to on- <br /> demand make the best offer.</p>
                        </div>
                    </div>
                    <div>
                        <figure>
                            <img className='md:w-[800px] px-5 md:px-0 rounded-xl' src={Image} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAreWeDifferent;