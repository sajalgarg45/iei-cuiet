import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EventCard from './EventCard';

function PastEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const API_URL = 'https://iei-api-4owj.onrender.com/event/past';

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
      <div className='main-p min-h-full'>
        <div className="flex flex-col items-center justify-center">
          <div className="text-white px-6 font-bold text-[24px] md:text-[40px] font-poppins">Past Event</div>
          <div className='w-full h-[1px] bg-white mb-10'></div>
        </div>

        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index}>
              <EventCard event={event} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PastEvent;
