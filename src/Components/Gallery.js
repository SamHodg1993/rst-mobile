import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import images from './images'

function Gallery() {
  return (
    <div className='gallary-container'>
      <Carousel fade>
        {images.map(e => {
          return(
            <Carousel.Item>
          <img
            className="d-block image"
            src={e.image}
            alt={e.alt}
          />
          <Carousel.Caption>
            <h3>{e.alt}</h3>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Gallery