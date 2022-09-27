import React from 'react'
import { FiPhoneCall, FiHome, FiPrinter, FiMail } from 'react-icons/fi'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='to-be-map'>
        <p className='text-white'>This is going to be a google maps map</p>
      </div>

      <div className='contact-item-container' id="test4">
        <div className='contact-item-inside-container'>

          <div className='contact-item'>
            <FiHome className=""/>
            <h6 className="p-2">Address:</h6>
            <p className='text-center'>Robert Summers Transport Ltd<br/>
                Tollpark Transport Center <br/>
                Station Rd <br/>
                Leven <br />
                Fife <br />
                KY8 1JH
            </p>
          </div>

          <div className='contact-item'>
            <FiPhoneCall className=""/>
            <h6 className="p-2">Telephone:</h6>
            <p>01592 713 172</p>
          </div>
        </div>

        <div className='contact-item-inside-container'>

          <div className='contact-item'>
            <FiPrinter className=""/>
            <h6 className="p-2">Fax:</h6>
            <p>01592 715 046</p>
          </div>

          <div className='contact-item'>
            <FiMail className=""/>
            <h6 className="p-2">E-mail:</h6>
            <p>
                <a href='mailto:traffic@robertsummerstransport.co.uk'>traffic@robertsummerstransport.co.uk</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact