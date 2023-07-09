import React from 'react'
import {PiShoppingCartLight} from 'react-icons/pi';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const count=useSelector((state)=>state.cart.count)
  const navigate=useNavigate();
  return (
    <header className=' absolute z-10  h-14 w-full bg-slate-50 shadow-md flex items-center justify-between px-5 md:px-20 '>
        <NavLink to={"/"} className='text-4xl font-semibold text-slate-700 tracking-tighter'>Shopping</NavLink>
        <div  onClick={()=>navigate("/cart")}  className='relative cursor-pointer'>
        <PiShoppingCartLight size={32}/>
        <div className={` ${count===0 ? "invisible":"visible"} absolute -top-2 -right-4 bg-blue-500 text-sm text-white h-5 text-center font-semibold w-5 rounded-full`}>{count}</div>
        </div>
    </header>
  )
}

export default Navbar