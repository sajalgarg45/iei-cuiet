import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/eventgal.css';
import EventGallery from './Pages/EventGallery';

ReactDOM.render(
  <React.StrictMode>
    <EventGallery />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA