import React from 'react';

const BuildJobBoard = () => {
    return (
        <div>
            <div className='bg-blue-600 flex flex-col md:flex-row items-center justify-evenly p-16'>
                <h1 className='text-4xl text-white font-bold text-center'>Start building your own job board now!</h1>
                <button class="btn border text-white mt-4 md:mt-0 bg-blue-600 border-white font-bold hover:bg-white hover:text-blue-500">Search Now</button>
            </div>
        </div>
    );
};

export default BuildJobBoard;