import React from 'react'
import {FaCcPaypal,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-slate-700 text-white px-5 md:px-20 py-5'>
       <div className='flex justify-between items-center'>
        <h3 className='font-semibold text-3xl tracking-tighter'>Shopping</h3>
       <div>
             <div className='flex gap-4'>
            <FaCcPaypal size={32}/>
            <FaCcVisa size={32} />
            <FaCcMastercard size={32}/>
        </div>
       </div>
       </div>
       <h3 className='text-center mt-4'>copyright 2023 &copy; Shopping eCommerce</h3>
    </footer>
  )
}

export default Footer