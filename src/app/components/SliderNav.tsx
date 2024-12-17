"use client"
import React from 'react'
import { useSwiper } from 'swiper/react';

const SliderNav = () => {
    const swiper = useSwiper();

  return (
    <div className='border-2 border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4'>
        <button onClick={() => swiper.slidePrev()} className='bg-blue-300 p-1 rounded-md'>Prev</button>
        <button onClick={() => swiper.slideNext()} className='bg-blue-300 p-1 rounded-md'>Next</button>

    </div>
  )
}

export default SliderNav