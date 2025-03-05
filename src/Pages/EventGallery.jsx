import React, { useState } from 'react';
import Title from '../components/Title';
// import UploadForm from '../components/uploadform';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import '../styles/eventgal.css'

function EventGallery() {
  const [selectedImg, setSelectedImg] = useState(null); 
  
  return (
    <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
      <div className="EventGallery">
        <Title/>
        {/* <UploadForm/> */}
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}

export default EventGallery;
