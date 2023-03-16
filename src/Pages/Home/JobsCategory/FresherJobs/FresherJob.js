import React from 'react';

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
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FresherJob;