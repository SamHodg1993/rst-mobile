import React from 'react'
import { FaWarehouse, FaStoreAlt, FaTruckMoving, FaRoad } from 'react-icons/fa'


function Services() {
  return (
    <div className='serv-cont' id="test2">
            <div className='serv-item'>
                <FaWarehouse className='icon' />
                <p className='serv-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae.</p>
            </div>
            <div className='serv-item'>
                <FaStoreAlt className='icon'/>
                <p className='serv-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae.</p>
            </div>
            <div className='serv-item'>
                <FaTruckMoving className='icon'/>
                <p className='serv-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae.</p>
            </div>
            <div className='serv-item'>
                <FaRoad className='icon'/>
                <p className='serv-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae.</p>
            </div>
    </div>
  )
}

export default Services