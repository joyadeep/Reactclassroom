import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { getMovie } from '../api/movieAPI'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading'
import Error from './Error';

const MovieList = () => {
    const {search} = useParams();
    const [list,setList]=useState([])
    const [isLoading,setIsLoading]=useState(false);
    const [isError,setIsError]=useState(null);


    useEffect(()=>{
        setIsLoading(true);
        getMovie(search).then((res)=>{
            console.log("res",res)
            if(res.data.Response==="True")
                setList(res.data.Search)
            else {
                console.log("status set true",res.data.Error)
                setIsError(res.data.Error);
            }
        })
        .catch((error)=>console.log("error",error))
        .finally(()=>{
            setIsLoading(false);
        })
    },[search])

 
    
  return (
    <>
    {
        isError ? <Error error={isError}/> 
        :
        <div className='px-10 grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-5 mt-10  ' >
      
        {
            isLoading ? <Loading/> :
            list?.map((movie,index)=>{ 
                return (
                    <MovieCard key={index} movie={movie} />
                )
            })
        }
    </div>
    }
    </>
  )
}

export default MovieList