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
    const [isError,setIsError]=useState(false);


    useEffect(()=>{
        setIsLoading(true);
        getMovie(search).then((res)=>{
            console.log("res",res)
            if(res.data.Response==="True")
                setList(res.data.Search)
            else {
                console.log("status set true")
                setIsError(true)
            }
        })
        .catch((error)=>console.log("error",error))
        .finally(()=>{
            setIsLoading(false);
            setIsError(false);
        })
    },[])

 
    
  return (
    <>
    {
        isError && <div className='text-black bg-slate-300 text-4xl' >Error here</div> 
        // :
    //     <div className='px-10 grid grid-cols-4 gap-x-3 gap-y-5 mt-10  ' >
      
    //     {
    //         isLoading ? <Loading/> :
    //         list?.map((movie,index)=>{ 
    //             return (
    //                 <MovieCard key={index} movie={movie} />
    //             )
    //         })
    //     }
    // </div>
    }
    </>
  )
}

export default MovieList