import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const FresherJob = ({ data }) => {
    const { name, location, companyName, logo } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="h-24 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-2xl flex items-center'><CiLocationOn className='mr-2' /> {location}</p>
                    <p className='text-2xl flex items-center'>Company: {companyName}</p>
                    <div className="card-actions mt-4">
                        <input className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" value='Apply' type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FresherJob;