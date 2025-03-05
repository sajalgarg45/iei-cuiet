import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonWorkspace, BsCalendar2Event, BsTrophy, BsLaptop, BsAndroid, BsCodeSlash } from "react-icons/bs";
import '../styles/home.css'
const Abouttemp = () => {
  return (
    <div>
      <section className='sm:px-20 xl:px-36 px-10 w-full pt-14 pb-14 h-auto flex flex-col'>
        <div className='flex flex-col py-11 gap-6'>
          <h1 className='text-white sm:text-left font-poppins font-bold text-[44px] text-center mb-4'>About IE(I)</h1>
          <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>The 
            <span className='text-white'>{' '}Institution of Engineers{' '}</span>
            Student Chapter, Chitkara University is one of the growing technical society in the university.</p>
          <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>The society has been giving back to back successful events which have proved to be really helpful for the participants and also given them an opportunity to explore more and have a clear direction for their goals.</p>
          <p className='text-g  ray-400 sm:text-left w-full text-center text-[18px] font-poppins'>It is one of those societies that believe in giving fair chances to everyone regardless of your year of study and thus, open core team interviews for all those who firmly believe in dedication and are willing to work for the growth of the society.</p>
          <p className='text-gray-400 sm:text-left w-full text-center text-[18px] font-poppins'>The society also provides the members with certificates for their hard work and the efforts they put in for boosting their confidence which ultimately leads to a healthy work culture.</p>
        </div>

        <div className='flex flex-wrap justify-center text-gray-400 '>
          <div className='box-content h-16 w-72 p-4 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7  mb-4 mx-4 rounded-lg inline-flex items-center justify-center text-base font-medium text-center  hover:bg-transparent hover:text-white border-2 border-blue-900 btn'>
            <BsPersonWorkspace />&nbsp; Workshops
          </div>
          <div className='box-content h-16 w-72 p-4 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7  mb-4 mx-4 rounded-lg inline-flex items-center justify-center text-base font-medium text-center  hover:bg-transparent hover:text-white border-2 border-blue-900 btn'>
            <BsCalendar2Event /> &nbsp; Seminars
          </div>
          <div className='box-content h-16 w-72 p-4 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7  mb-4 mx-4 rounded-lg inline-flex items-center justify-center text-base font-medium text-center  hover:bg-transparent hover:text-white border-2 border-blue-900 btn'>
            <BsTrophy /> &nbsp; Coding Competitions
          </div>
          <div className='box-content h-16 w-72 p-4 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7 mb-4 mx-4 rounded-lg inline-flex items-center justify-center text-base font-medium text-center  hover:bg-transparent hover:text-white border-2 border-blue-900 btn'>
            <BsLaptop /> &nbsp; Code Wars
          </div>
          <div className='box-content h-16 w-72 p-4 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7 mb-4 mx-4 rounded-lg inline-flex items-center justify-center text-base font-medium text-center hover:bg-transparent hover:text-white border-2 border-blue-900 btn'>
            <BsAndroid /> &nbsp; Tech Events
          </div>
          <div className='box-content h-16 w-72 p-4 bg-nav bg-opacity-50 backdrop-blur-sm lg:py-8 lg:px-7 mb-4 mx-4 rounded-lg inline-flex items-center justify-center text-base font-medium text-center hover:bg-transparent hover:text-white border-2 border-blue-900 btn'>
            <BsCodeSlash /> &nbsp; Hackathons
          </div>
        </div>

        <Link to="/Teamiei" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border rounded-lg  self-center	gradiant">
          Explore Now
          <svg className="w-5 h-5 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>

      </section>


    </div>

  );
}

export default Abouttemp;
