import React from 'react'
import singlemovie from '../assets/images/netflix.jpg'
import {MdLocalMovies} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';
import {FaLanguage} from 'react-icons/fa'
const SingleMovie = () => {
  return (
    <div className='h-screen p-20'>
        <div className='flex gap-2 h-full bg-slate-100 rounded-md overflow-hidden shadow-md shadow-slate-100' >
            <img src={singlemovie} alt="" className='w-1/2 object-cover' />
            <div className='' >
                <p className='text-2xl mb-3 font-medium' >Movie Title</p>
                <p className='text-xl flex items-center ' >1990 | <MdLocalMovies/> 120mins | <AiFillStar className='text-yellow-400'/>  6/10 </p>
                <p className='text-xl font-semibold'>horror</p>
                <p className='text-xl'>Director : John Doe</p>
                <p className='text-xl'>Writer : John Doe</p>
                <p className='flex text-xl items-center gap-2'> <FaLanguage size={32}/> English</p>
                <p className='text-xl font-semibold' > Actors : actor1 actor2 </p>
                <p className='text-lg '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, natus tenetur officia commodi quidem quam ad, quia tempore ex repellat itaque distinctio! Consectetur natus distinctio animi unde veniam sit eum!</p>
            </div>
        </div>
    </div>
  )
}

export default SingleMovie