import React, { useState } from 'react'

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
      <div className=' bg-blue-900 h-10 w-full flex text-red-500 justify-evenly items-center'>
        <p>Phone: 01299 333 221</p>
        <p>Email: whatever@RST.com</p>
      </div>
      <img src={SeanTrussHighlands} id="test1" alt=""className="w-full"/>
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
