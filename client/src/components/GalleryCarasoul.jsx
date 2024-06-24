import React from 'react'
import Carosel from 'react-material-ui-carousel';
import images from "../data/galleryImages.json"

const GalleryCarasoul = () => {
  return (
    <div className='w-full h-full '>
        <Carosel>
            {images.map((item) => <img className='ml-44' src={item.src}/>)}
        </Carosel>
    </div>
  )
}

export default GalleryCarasoul
