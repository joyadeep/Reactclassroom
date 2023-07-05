import React from 'react'
import {PiShoppingCartLight} from 'react-icons/pi';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
const Navbar = () => {
  const count=useSelector((state)=>state.cart.count)
  const navigate=useNavigate();
  return (
    <header className='  h-14 bg-slate-50 shadow-md flex items-center justify-between px-20 '>
        <h1 className='text-4xl font-semibold text-slate-700 tracking-tighter'>Shopping</h1>
        <div  onClick={()=>navigate("/cart")}  className='relative cursor-pointer'>
        <PiShoppingCartLight size={32}/>
        <div className={` ${count===0 ? "invisible":"visible"} absolute -top-2 -right-4 bg-blue-500 text-sm text-white h-5 text-center font-semibold w-5 rounded-full`}>{count}</div>
        </div>
    </header>
  )
}

export default Navbar