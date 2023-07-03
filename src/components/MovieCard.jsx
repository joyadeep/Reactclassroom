import React from 'react'
import { useNavigate } from 'react-router-dom'
// import movie from '../assets/images/netflix.jpg'

const MovieCard = ({movie}) => {

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(`/movie_detail/${movie.imdbID}`)
  }

  return (
    <div onClick={handleClick} className='bg-blue-500 w-full h-fit rounded-md overflow-hidden cursor-pointer hover:scale-105 duration-500 ' >
        <img src={movie.Poster} className='w-full' alt="" />
        <div className='text-white px-3 py-3' >
            <h4 className='text-xl font-medium'>{movie.Title}</h4>
            <h5>{movie.Year}</h5>
        </div>
    </div>
  )
}

export default MovieCard