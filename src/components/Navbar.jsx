import React, { useState } from 'react'
import {PiShoppingCart} from 'react-icons/pi'
import { NavLink,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const count=useSelector((state)=>state.cart.count)
  const navigate=useNavigate();
  const [isOpen,setIsOpen]=useState(false);


  return (
    <header className='absolute z-10 h-14 bg-slate-50 shadow-md w-full px-5 md:px-20 flex justify-between items-center' >
        {/* <NavLink to={"#"} className='text-4xl font-semibold text-slate-700 tracking-tighter'>Shopping</NavLink>
        
        <div onClick={()=>navigate("/cart")} className='cursor-pointer relative'>
            <PiShoppingCart size={32} />
            <div className={`${count === 0 ? "invisible": "visible"} absolute -top-2 -right-3 bg-blue-500 text-sm text-white text-center h-5 font-semibold w-5 rounded-full `  } >{count}</div>
        </div> */}
      <div className='relative'>
      <button onMouseEnter={()=>setIsOpen(true)} >Menu</button>
      <ul onMouseLeave={()=>{setIsOpen(false)}} className={` ${isOpen ? "flex" :"invisible"} bg-green-400 px-5 py-10  gap-5 absolute top-5`}>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>

      </ul>
      </div>































    </header>
  )
}

export default Navbar