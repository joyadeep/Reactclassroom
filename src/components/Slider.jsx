import React from 'react'

const Slider = () => {
  return (
    <div className='h-96 bg-pink-600/60 relative '>
        <div className='absolute top-0 w-full h-full bg-model bg-no-repeat bg-bottom md:bg-right bg-contain' />
        <div className='absolute top-1/2 text-white px-5 font-bold md:px-20'>
            <p className='capitalize text-5xl '>flash summer sale <span className='animate-pulse' >!</span> </p>
            <p className='text-md capitalize font-normal'>grab best deals today !</p>
        </div>
    </div>
  )
}

export default Slider