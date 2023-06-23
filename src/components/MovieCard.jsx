import React from 'react'
import movie from '../assets/images/netflix.jpg'

const MovieCard = () => {
  return (
    <div className='bg-blue-500 w-full h-fit rounded-md overflow-hidden cursor-pointer hover:scale-105 duration-500 ' >
        <img src={movie} alt="" />
        <div className='text-white px-3 py-3' >
            <h4 className='text-xl font-medium'>Title</h4>
            <h5>1990</h5>
        </div>
    </div>
  )
}

export default MovieCard