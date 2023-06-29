import React, { useEffect, useState } from 'react'
import singlemovie from '../assets/images/netflix.jpg'
import {MdLocalMovies} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {FaLanguage} from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import { getMovieByID } from '../api/movieAPI';
import Loading from '../components/Loading';
const SingleMovie = () => {
  const {id}=useParams();
  const [movie,setMovie]=useState({});
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    setIsLoading(true);
    getMovieByID(id).then((res)=>{
      console.log("movie detail =",res)
      setMovie(res.data);
    }).catch((error)=>{
      console.log("error",error);
    }).finally(()=>setIsLoading(false))
  },[])

  return (
    <div className='h-screen p-20'>
       {
        isLoading ? <Loading/> :
        <div className='flex gap-2 h-full bg-slate-100 rounded-md overflow-hidden shadow-md shadow-slate-100' >
        <img src={movie.Poster} alt="" className='w-1/2 object-cover' />
        <div className='' >
            <p className='text-2xl mb-3 font-medium' >{movie.Title}</p>
            <p className='text-xl flex items-center ' >{movie.Year} | <MdLocalMovies/> {movie.Runtime} | <AiFillStar className='text-yellow-400'/>  {movie.imdbRating} / 10 </p>
            <p className='text-xl'>{movie.Genre}</p>
            <p className='text-xl'>Director : {movie.Director}</p>
            <p className='text-xl'>Writer : {movie.Writer}</p>
            <p className='flex text-xl items-center gap-2'> <FaLanguage size={32}/> {movie.Language}</p>
            <p className='text-xl font-semibold' > Actors : {movie.Actors} </p>
            <p className='text-lg '>{movie.Plot}</p>
        </div>
    </div>
       }
    </div>
  )
}

export default SingleMovie