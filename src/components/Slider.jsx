import React from 'react'

const Slider = () => {
  return (
    <div className='h-96 bg-pink-600/60 relative'>
        <div className='absolute top-0 w-full h-full bg-model bg-contain bg-no-repeat bg-right '/>
       
        <div className='absolute top-1/2 text-white px-20'>
            <p className='text-5xl font-bold'>Flash Summer Sale <span className='animate-pulse'>!</span></p>
            <p className='text-md capitalize'>grab best deals today !</p>
        </div>
    </div>
  )
}

export default Slider