import React from 'react'
// import {useRef, useState} from 'react'
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Link } from 'react-router-dom';


import '../styles/slider.css';
import '../styles/home.css'

// import required modules
import { EffectCards,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import {events} from '../utils/pastEvents'

const RecentEvents = () => {
    SwiperCore.use([Autoplay,EffectCards]);
  return (
    <section className='sm:px-20 xl:px-36 px-10 flex w-full flex-col sm:flex-row justify-evenly pt-14 pb-14 h-fit second-section'>
        <div className='w-full sm:w-[55%] flex flex-col justify-center items-center relative'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 3500 }}
          className="mySwiper"
        >
          {events.map((event,index) => (
            <SwiperSlide key={index}>
              <img src={event} alt="event" className='w-full h-full'/>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className='w-full sm:w-[45%] flex flex-col justify-center gap-14 sm:items-end items-center pt-10 sm:pt-0'>
          <h1 className='text-white sm:text-right font-poppins font-semibold text-[44px] text-center'>Our Recent Events</h1>
          <p className='text-gray-400 sm:text-right w-full text-center'>As quoted by Benjamin Franklin "An investment in knowledge pays the best interest". Events are a simple way of providing information to others and gaining new experiences by conducting them. IE(I) Student Chapter, Chitkara University conducts various events that are not only informative but always give new hope to people to learn more and achieve great heights in life.</p>
          <>
            <Link to='/pastEvent' className=' inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white gradiant rounded-lg border'>View All Events</Link>
          </>
        </div>
      </section>
  )
}

export default RecentEvents
