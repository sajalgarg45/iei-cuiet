import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

        <footer className="relative pt-8 pb-6 bg-[#121212] text-white">
            <hr className="my-6 border-gray-800" />
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">IE(I) CUIET</h4>
                        <h5 className="text-gray-400 mb-2 mt-2 hover:text-orange-600">
                            iei.cse@chitkara.edu.in
                        </h5>
                        <h5 className="text-gray-400 mt-0 mb-2">
                            Chandigarh-Patiala National Highway (NH-64), Village Jhansla, Rajpura, Punjab 140401
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <div className="flex space-x-2 text-2xl">
                                <Link to="https://www.instagram.com/ieicuiet/" target='_blank' className="text-pink-400 hover:text-pink-600">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                                <Link to="https://www.facebook.com/people/Iei-Cuiet/" target='_blank' className="text-blue-400 hover:text-blue-600">
                                    <i className="fab fa-facebook-square"></i>
                                </Link>
                                <Link to="https://www.linkedin.com/company/ieichandigarh/" target='_blank' className="text-blue-400 hover:text-blue-600">
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                                <Link to="https://github.com/ieiciet" target='_blank' className="text-gray-400 hover:text-gray-600">
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-2xl">Know More</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/event" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Event</Link>
                                    </li>
                                    <li>
                                        <Link to="/eventgallery" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Events Gallery</Link>
                                    </li>
                                    <li>
                                        <Link to="/teamIei" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Team</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/terms-and-conditions" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="text-blueGray-600 hover:text-blueGray-800 text-gray-400 block pb-2 text-sm">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-400 font-semibold py-1">
                            Copyright © <span id="get-current-year">2021</span>  All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
