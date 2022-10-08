import React from 'react'
import { FiPhoneCall, FiHome, FiPrinter, FiMail } from 'react-icons/fi'

function Contact() {
  return (
    <div className='contact-container' id="test4">

      <div className='to-be-map'>
        <p className='text-white'>This is going to be a google maps map</p>
      </div>

      <div className='contact-row contact-row-1'>

        <div className='contact-item'>
          <FiHome className="contact-icon"/>
          <p className='text-center contact-address'>Robert Summers Transport Ltd<br/>
              Tollpark Transport Center <br/>
              Station Rd <br/>
              Leven <br />
              Fife <br />
              KY8 1JH
          </p>
        </div>

        <div className='contact-item'>
          <FiPhoneCall className="contact-icon"/>
          <p>01592 713 172</p>
        </div>
      </div>

      <div className='contact-row contact-row-2'>

        <div className='contact-item'>
          <FiPrinter className="contact-icon"/>
          <p>01592 715 046</p>
        </div>

        <div className='contact-item'>
          <FiMail className="contact-icon"/>
          <p>
              <a href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact