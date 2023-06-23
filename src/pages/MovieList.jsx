import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { getMovie } from '../api/movieAPI'

const MovieList = () => {
    useEffect(()=>{
        getMovie("joker").then((res)=>console.log("res",res))
        .catch((error)=>console.log("error",error))
    },[])
  return (
    <div className='px-10 grid grid-cols-4 gap-x-3 gap-y-5 mt-10  ' >
        {
            [1,2,3,4,5,6,7].map((item,index)=>{ //data
                return (
                    <MovieCard key={index} item={item} />
                )
            })
        }
    </div>
  )
}

export default MovieList