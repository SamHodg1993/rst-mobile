import React from 'react'

import LoveOliver from '../images/loveOliver.webp' 

function Footer() {
  return (
    <div className='footer-container'>
        <p className='p-3'>Robert Summers Transport is proud to support: Love Oliver</p>
        <img src={LoveOliver} alt="Love Oliver's Logo"/>
        <p className=" p-4 ">&copy;&nbsp;&nbsp;Robert Summers Transport 2022 Created and designed by <a href="https://sam-hodgkinson.co.uk/" className=" text-blue-400">Sam Hodgkinson</a></p>
    </div>
  )
}

export default Footer