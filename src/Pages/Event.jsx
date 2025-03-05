import React from 'react';
import UpcomingEvent from '../components/UpcomingEvent';
import PastEvent from '../components/PastEvent';
import EventGallery from '../components/EventGallery';

function Event() {
  return (
    <div>
      <UpcomingEvent />
      <PastEvent />
      <EventGallery/>
    </div>
  );
}

export default Event;
