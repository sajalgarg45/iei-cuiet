import React from 'react'
import logo from '../assets/icons/logo.png'
import chitkaraLogo from '../assets/bg/CU_logo.png'
import { Link } from 'react-router-dom'
import {RxCross2} from 'react-icons/rx'
import {CiMenuFries} from 'react-icons/ci'
import { useState } from 'react'

export default function NavBar() {
  // const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);
  // const [scroll, setScroll] = useState(false);
  return (
    <nav className='sm:px-6 fixed w-full z-[3] rounded-lg sm:rounded-none z-10'>
        <div className='flex-row items-center justify-between hidden sm:inline-flex bg-nav bg-opacity-50 backdrop-blur-sm w-full rounded-lg px-4 py-2 mt-4'>

            <div className='flex flex-row items-center justify-center gap-5 text-white'>
              <Link to='/' relative='path' className='hover:text-orange-500'>Home</Link>
              <Link to='/event' relative='path' className='hover:text-orange-500'>Events</Link>
              <Link to='/teamIei' relative='path' className='hover:text-orange-500'>Teams</Link>
              {/* <Link to='/upcomingEvent' relative='path' className='hover:text-orange-500'>Upcoming Events</Link>
              <Link to='/pastEvent' relative='path' className='hover:text-orange-500'>Past Events</Link> */}
              <Link to='/eventgallery' relative='path' className='hover:text-orange-500'>Event Gallery</Link>
              <Link to='/contact' relative='path' className='hover:text-orange-500'>Contact</Link>
            </div>
            
            <div></div>
            <div className='flex flex-row items-center gap-1'>
              {/* <div className='h-10 w-10'><img src={logo} alt=""/></div>
              <RxCross2 className='text-white'/> */}
              <div className='h-10 w-10 mt-[7px]'><img src={chitkaraLogo} alt=""/></div>
            </div>
        </div>
        <div className='sm:hidden flex flex-1 items-center p-4 justify-between'>
          <div className='flex flex-row items-center gap-1 bg-nav p-2 rounded-lg bg-opacity-30 backdrop-blur-sm'>
            {/* <div className='h-10 w-10'><img src={logo} alt=""/></div>
            <RxCross2 className='text-white'/> */}
            <div className='h-10 w-10 mt-[7px]'><img src={chitkaraLogo} alt=""/></div>
          </div>
          {toggle ? (
            <RxCross2 className='w-[28px] h-[28px] cursor-pointer text-white' onClick={() => setToggle(!toggle)} />
            ) : (
            <CiMenuFries className='w-[28px] h-[28px] cursor-pointer text-white' onClick={() => setToggle(!toggle)} />)}
        </div>
        <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4  bg-nav bg-opacity-80 backdrop-blur-sm p-6 rounded-lg'>
            <Link to='/' relative='path' className='hover:text-orange-500 text-white'>Home</Link>
            <Link to='/event' relative='path' className='hover:text-orange-500 text-white'>Events</Link>
            <Link to='/teamIei' relative='path' className='hover:text-orange-500 text-white'>Teams</Link>
            {/* <Link to='/upcomingEvent' relative='path' className='hover:text-orange-500 text-white'>Upcoming Events</Link>
            <Link to='/pastEvent' relative='path' className='hover:text-orange-500 text-white'>Past Events</Link> */}
            <Link to='/eventgallery' relative='path' className='hover:text-orange-500 text-white'>Event Gallery</Link>
            <Link to='/contact' relative='path' className='hover:text-orange-500 text-white'>Contact</Link>
          </ul>
        </div>
    </nav>
    
  )
}
