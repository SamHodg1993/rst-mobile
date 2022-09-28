import React from 'react'

import images from './images'
import ImageModal from './ImageModal'

function Gallery() {
  return (
    <div className='gallary-container'>
        {images.map(e => {
          return(
            <div key={e.id} className="gallary-image">
              <img src={e.image} alt={e.alt}/>
              <p>{e.alt}</p>
              <ImageModal url={e.image} alt={e.alt}/>
            </div>
          )
        })}
    </div>
  )
}

export default Gallery