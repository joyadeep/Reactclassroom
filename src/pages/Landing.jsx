import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [movie,setMovie]=useState("");
    const navigate =useNavigate();

    const handleChange=e=>{
        setMovie(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        console.log("movie name =",movie);
        navigate(`/movies/${movie}`)
        setMovie("")
    }

  return (
    <>
    <Navbar/>
    <main className='h-screen bg-netflix flex flex-col gap-7  md:px-40 justify-center items-center text-white' >
        <h1 className='text-4xl md:text-6xl font-bold text-center' >Unlimited movies, TV shows, and more</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col md:flex-row justify-center items-center gap-5'>
            <input className='w-11/12 md:w-1/2 text-2xl text-black pl-4 py-2 outline-none rounded-md' type="text" name="movie" value={movie} onChange={handleChange} />
            <button className='bg-red-600 h-14 md:h-full px-5 rounded-md text-xl font-medium hover:bg-red-500'>Search</button>
        </form>
        <p className='text-xl'>search movie of your choice</p>
    </main>
    </>
  )
}

export default Landing
