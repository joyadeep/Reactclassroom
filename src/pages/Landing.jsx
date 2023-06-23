import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Landing = () => {
    const [movie,setMovie]=useState("");

    const handleChange=e=>{
        setMovie(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        setMovie("")
        console.log("movie name =",movie);
    }

  return (
    <>
    <Navbar/>
    <main className='h-screen bg-netflix flex flex-col gap-7 px-40 justify-center items-center text-white' >
        <h1 className='text-6xl font-bold text-center' >Unlimited movies, TV shows, and more</h1>
        <form onSubmit={handleSubmit} className='w-full flex justify-center items-center gap-5'>
            <input className='w-1/2 text-2xl text-black pl-4 py-2 outline-none rounded-md' type="text" name="movie" value={movie} onChange={handleChange} />
            <button className='bg-red-600 h-full px-5 rounded-md text-xl font-medium hover:bg-red-500'>Search</button>
        </form>
        <p className='text-xl'>search movie of your choice</p>
    </main>
    </>
  )
}

export default Landing
