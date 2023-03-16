import React from 'react';
import footerIcon from '../../../assets/Images/Fresher-Job-Assets/Dev1.svg';

const Footer = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <footer className="footer p-10 ">
                <div>
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={footerIcon} alt="" />
                        </div>
                    </div>
                    <p>Nay Tech Org.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;