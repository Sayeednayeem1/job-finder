import React from 'react';
import company1 from '../../../assets/Images/Fresher-Job-Assets/Dev1.svg';
import company2 from '../../../assets/Images/Fresher-Job-Assets/Dev2.svg';
import company3 from '../../../assets/Images/Fresher-Job-Assets/Dev3.svg';
import TopItCompany from './TopItCompany';

const TopItCompanies = () => {
    const topItCompanyData = [
        {
            id: 1,
            name: "Front-End Development",
            location: "Dhaka",
            companyName: "IT Farm Tech",
            logo: company1
        },
        {
            id: 2,
            name: "Back-End Development",
            location: "Chittagong",
            companyName: "IT Farm Tech",
            logo: company2,
        },
        {
            id: 3,
            name: "React.js Development",
            location: "Sylhet",
            companyName: "IT Farm Tech",
            logo: company3,
        }
    ];
    return (
        <div className='mt-24 mb-16' data-aos="fade-up" data-aos-easing="linear">
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-5'>Discover Jobs For You</h1>
                    <p className='text-[#176CCF] font-bold'>Browse 200+ Top Jobs For The Freshers!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto px-5 md:px-0 mt-12'>
                    {
                        topItCompanyData.map(data => <TopItCompany
                            key={data.id}
                            data={data}
                        ></TopItCompany>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopItCompanies;