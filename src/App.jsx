import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Event from './Pages/Event';
import TeamIei from './Pages/TeamIei';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PastEvent from './components/PastEvent';
import EventGallery from './Pages/EventGallery';
import Registration from './Pages/Registration';
import UpcomingEvent from './components/UpcomingEvent';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/event/registration" element={<Registration/>}/>
      <Route path="/upcomingEvent" element={<UpcomingEvent/>}/>
      <Route path="/pastEvent" element={<PastEvent/>}/>
      <Route path="/teamIei" element={<TeamIei/>}/>
      <Route path="/eventgallery" element={<EventGallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;