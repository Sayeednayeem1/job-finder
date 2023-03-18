import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BuildJobBoard = () => {

    // todo banner animation
    useEffect(() => {
        Aos.init({ duration: 2000 }, () => {
            Aos.refresh();
        });
    }, []);

    return (
        <div data-aos="zoom-in" data-aos-easing="linear">
            <div className='bg-blue-600 flex flex-col md:flex-row items-center justify-evenly p-16'>
                <h1 className='text-4xl text-white font-bold text-center'>Start building your own job board now!</h1>
                <button class="btn border text-white mt-4 md:mt-0 bg-blue-600 border-white font-bold hover:bg-white hover:text-blue-500">Search Now</button>
            </div>
        </div>
    );
};

export default BuildJobBoard;