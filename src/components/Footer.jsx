import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="container mx-auto mt-20">
            <img src={logo} alt="Logo" className='ml-5 mb-5 sm:mb-5' />
            <div className="flex flex-col ml-5 sm:flex-row justify-between py-5 border-t">
                <div className="flex mb-4 sm:mb-0">
                    <div className="">
                        <p className="text-gray-700">Create Explore & Collect Digital NFTs</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-gray-700">
                    <a href="#" className="hover:text-gray-900">Privacy</a>
                    <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
                    <a href="#" className="hover:text-gray-900">About Us</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
