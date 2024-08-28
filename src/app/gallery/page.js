import GalleryBox from '@/components/gallery/GalleryBox'
import GallerySlide from '@/components/gallery/GallerySlide'
import React from 'react'

const Gallery = () => {
  return (
    <main className="">
      <h1 className="font-black text-3xl text-center ">
        Our Gallery
      </h1>
      <p className="text-orange-500 text-center">A Glimpse into Our Work and Passion</p>
      <GallerySlide />
      <GalleryBox />
    </main>
  )
}

export default Gallery