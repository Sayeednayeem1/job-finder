import React from 'react';
import company1 from '../../../assets/Images/Fresher-Job-Assets/Dev1.svg';
import company2 from '../../../assets/Images/Fresher-Job-Assets/Dev2.svg';
import company3 from '../../../assets/Images/Fresher-Job-Assets/Dev3.svg';
import TopItCompanyBD from './TopItCompanyBD';

const TopItCompanies = () => {

    const topItCompanyData = [
        {
            id: 1,
            name: "Bangla Puzzle Limited",
            location: "Dhaka",
            logo: company1
        },
        {
            id: 2,
            name: "Brain Station 23",
            location: "Dhaka",
            logo: company2,
        },
        {
            id: 3,
            name: "Technobd Limited",
            location: "Dhaka",
            logo: company3,
        }
    ];
    return (
        <div className='mt-24 mb-16'>
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-5'>Top IT Companies In Bangladesh</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto px-5 md:px-0 mt-12'>
                    {
                        topItCompanyData.map(data => <TopItCompanyBD
                            key={data.id}
                            data={data}
                        ></TopItCompanyBD>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopItCompanies;