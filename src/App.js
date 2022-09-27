import React, { useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

import './App.css';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact'
import SeanTrussHighlands from './Images/SeanTrussHighlands.jpg'

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  const setPageGallery = () => {
    setCurrentPage('gallery')
  }
  
  const setPageHome = () => {
    setCurrentPage('home')
  }

  return (
    <div>
      <div className='top-bar'>
        <p className='inline'><FaPhoneAlt className='m-5'/> <span className='text-white'>01592 715 046</span></p>
        <p className='inline'><FaEnvelope className='m-5'/> <span className='text-white'><a href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a></span></p>
      </div>
      <img src={SeanTrussHighlands} id="test1" alt=""className="w-full brightness-125"/>
      <Navbar 
        setPageGallery={setPageGallery}
        setPageHome={setPageHome}
      />

      {currentPage === 'home' &&
      <div>
        <Services />
        <About />
        <Contact />
      </div>} 

      {currentPage === 'gallery' && <Gallery />}
    </div>
  );
}

export default App;
