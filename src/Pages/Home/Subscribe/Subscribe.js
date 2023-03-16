import React from 'react';

const Subscribe = () => {
    return (
        <div className='my-28'>
            <div className='max-w-[1440px] mx-5 lg:mx-auto'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-3'>Subscribe our newsletter to get</h1>
                    <h1 className='text-4xl font-bold mb-14'>updates about latest jobs</h1>
                    <p className='text-xl opacity-70'>Go house hunting with confidence thanks to all the information that experts normally keep to <br /> themselves. Check the facts and figures whenever you want, from wherever you want. With the <br /> data of Walter you’ll make smarter choices when hunting for a home.</p>
                    <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
                        <div className='bg-[#EBEAFF] p-5 md:w-1/2 rounded-xl'>
                            <input type="text" placeholder="Type here" className="input w-full max-w-xs mr-0 md:mr-2 mb-2 md:mb-0" />
                            <button class="btn btn-primary">Search Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;