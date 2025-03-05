import React from 'react';

function EventCard({ event }) {
  return (
    <div className="relative group w-72 xl:w-80 h-full overflow-hidden bg-black m-auto mt-4">
      <img src={event.Image} alt={event.EventName} />
      <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-6">
            {event.EventName}
          </p>
        </div>
        <div className="absolute w-full flex flex-col justify-center items-center mt-14">
          <p className="font-sans text-center w-4/5 text-white mt-5">
            {event.description}
          </p>
          <p className="font-sans text-center w-4/5 text-white mt-5">
            Date: {event.Date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
