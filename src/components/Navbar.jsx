import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full absolute  text-white px-28 h-16  flex items-center justify-between'>
        <div className='text-5xl text-red-600 font-bold uppercase ' >netflix</div>
        <button className='text-xl bg-red-600 px-5 py-2 rounded-md font-semibold hover:bg-red-500 ' >Login</button>
    </header>
  )
}

export default Navbar
