import React from 'react'
import { FaWarehouse, FaTruckMoving, FaRoad } from 'react-icons/fa'
import { IoMapOutline } from "react-icons/io5";


function Services() {
  return (
    <div className='serv-cont' id="test2">
            <div className='serv-item'>
                <FaWarehouse className='icon' />
                <p className='serv-text'>Storage of all goods, from pallets to packs of timber and brick.</p>
            </div>
            <div className='serv-item'>
                < IoMapOutline className='icon'/>
                <p className='serv-text'>We offer a complete delivery service accross the whole of the United Kingdom. Need something extra? Give us a quick call and we can see what we can do accommodate you!</p>
            </div>
            <div className='serv-item'>
                <FaTruckMoving className='icon'/>
                <p className='serv-text'>The highest standard of Class 1 and Class 2 drivers. Whatever the load, Summers Transport have your back.</p>
            </div>
            <div className='serv-item'>
                <FaRoad className='icon'/>
                <p className='serv-text'>Delivery of all good via road transport in accordance with the best practices defined by the Road Haulage Association.</p>
            </div>
    </div>
  )
}

export default Services