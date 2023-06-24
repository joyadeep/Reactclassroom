import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { getMovie } from '../api/movieAPI'
import { useParams } from 'react-router-dom';

const MovieList = () => {
    const {search} = useParams();
    const [list,setList]=useState([])


    useEffect(()=>{
        getMovie(search).then((res)=>{
            console.log("res",res)
            setList(res.data.Search)
        })
        .catch((error)=>console.log("error",error))
    },[])
  return (
    <div className='px-10 grid grid-cols-4 gap-x-3 gap-y-5 mt-10  ' >
      
        {
            list.map((movie,index)=>{ 
                return (
                    <MovieCard key={index} movie={movie} />
                )
            })
        }
    </div>
  )
}

export default MovieList