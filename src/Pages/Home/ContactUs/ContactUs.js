import React, { useEffect } from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaAddressBook, FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { RxResume } from "react-icons/rx";
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    // todo AOS animation
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div>
                <div className='h-[690px]  flex justify-center items-center' data-aos="fade-down" data-aos-easing="linear">
                    <div className='w-[80%] md:w-80  shadow-xl p-6'>
                        <h1 className='text-2xl font-bold mb-3'>Abu Sayeed</h1>
                        <div className='flex items-center'>
                            <FaAddressBook className='text-xl mr-2'></FaAddressBook>
                            <h1 className='text-2xl font-bold'>Address</h1>
                        </div>
                        <hr className='border-2 border-secondary rounded-full mb-3' />
                        <p>Sylhet, Bangladesh</p>
                        <div className='flex items-center mt-2'>
                            <BiPhoneCall className='text-xl mr-2'></BiPhoneCall>
                            <p className='text-2xl font-bold'>Phone</p>
                        </div>
                        <hr className='border-2 border-secondary rounded-full mb-3' />
                        <p>+8801751589952</p>
                        <div className='flex items-center mt-2'>
                            <HiMail className='text-xl mr-2'></HiMail>
                            <h1 className='text-2xl font-bold'>Email</h1>
                        </div>
                        <hr className='border-2 border-secondary rounded-full mb-3' />
                        <p>sayeedn850@gmail.com</p>
                        <div className='flex items-center mt-4'>
                            <a target='_blank' rel='noreferrer' href="https://github.com/Sayeednayeem1" className='text-3xl  mr-4'> <BsGithub></BsGithub></a>
                            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sayeed-nayeem/" className='text-3xl  mr-4'> <AiFillLinkedin></AiFillLinkedin></a>
                            <a target='_blank' rel='noreferrer' href="https://web.facebook.com/sayed.nayem.188/" className='text-3xl  mr-4'> <FaFacebookSquare></FaFacebookSquare></a>
                            <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1KKV1dAsGIhR7HisZgOYCbDbXS9v1-k-V/view?usp=sharing" className='text-3xl '> <RxResume></RxResume> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;