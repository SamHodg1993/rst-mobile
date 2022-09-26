import React from 'react'
import { Link } from 'react-scroll'

import '../App.css'

function Navbar({setPageGallery, setPageHome}) {
  return (
    <div className='nav sticky top-0 bottom-0 max-w-full'>
        <Link to="test1" smooth={true} duration={500} offset={-50}>
            <button onClick={() => setPageHome()} className="nav-button">
                Home
            </button>
        </Link>
        <Link to="test2" smooth={true} duration={500} offset={-50}>
            <button onClick={() => setPageHome()} className="nav-button">
                Services
            </button>
        </Link>
        <Link to="test3" smooth={true} duration={700} offset={-50}>
            <button onClick={() => setPageHome()} className="nav-button">
                About
            </button>
        </Link>
        <Link to="test4" smooth={true} duration={500} offset={-50}>
            <button onClick={() => setPageHome()} className="nav-button">
                Contact
            </button>
        </Link>
        <Link to="test5" smooth={true} duration={500} offset={-50}>
            <button onClick={() => setPageGallery()} className="nav-button">
                Gallery
            </button>
        </Link>
    </div>
  )
}

export default Navbar