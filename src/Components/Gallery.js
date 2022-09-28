import React from 'react'

import images from './images'

function Gallery() {
  return (
    <div className='gallary-container'>
        {images.map(e => {
          return(
            <div key={e.id} className="gallary-image">
              <img src={e.image} alt={e.alt}/>
              <p>{e.alt}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Gallery