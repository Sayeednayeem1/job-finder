import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const TopItCompanyBD = ({ data }) => {

    const { name, location, logo } = data;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="h-24 rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-2xl flex items-center'><CiLocationOn className='mr-2' /> {location}</p>
                    <div className="card-actions mt-4">
                        <Link to='/'><input className="btn btn-primary bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-white font-bold border-none" value='View Details' readOnly type="text" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopItCompanyBD;