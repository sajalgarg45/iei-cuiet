import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/home.css'

const EventGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const API_URL = 'https://iei-api-4owj.onrender.com/gallery';
    axios
      .get(API_URL)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white px-6 font-bold text-[24px] md:text-[40px] font-poppins">Event Gallery</div>
        <div className='w-full h-[1px] bg-white mb-10'></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((image) => (
          <div key={image._id} className="overflow-hidden transition-transform hover:scale-105">
            <img
              src={image.imageUrl}
              alt={image._id}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <Link
          to="/EventGallery"
          className="block md:w-auto rounded border px-4 md:px-6 py-2 text-sm md:text-base font-medium text-white btn"
        >
          Explore More
        </Link>
      </div>
      
    </div>
  );
};

export default EventGallery;
