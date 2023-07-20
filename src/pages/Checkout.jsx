import React from 'react'
import { useState } from 'react'

const Checkout = () => {
    const [data,setData]=useState({fullname:"",email:"",address:"",phone:"",payment:""})

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("data==",data);
    }
  return (
    <div className='px-5 md:px-20 py-10 felx flex-col md:flex-row'>
        {/* form */}
        <div className='md:w-1/2'>
            <h3 className='text-2xl font-semibold'>Billing Address</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <label className='text-slate-500' htmlFor="fullname">FullName</label>
                    <input type="text" name='fullname' value={data.fullname} onChange={handleChange} className='border outline-none rounded-md px-3 py-2 text-xl' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-slate-500' htmlFor="Email">Email</label>
                    <input type="email" name='email' value={data.email} onChange={handleChange} className='border outline-none rounded-md px-3 py-2 text-xl' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-slate-500' htmlFor="Address">Address</label>
                    <input type="text" name='address' value={data.address} onChange={handleChange} className='border outline-none rounded-md px-3 py-2 text-xl' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-slate-500' htmlFor="Phone">Phone</label>
                    <input type="tel" name='phone' value={data.phone} onChange={handleChange} className='border outline-none rounded-md px-3 py-2 text-xl' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-slate-500' htmlFor="Payment Method">Payment Method</label>
                    <select name='payment' value={data.payment} onChange={handleChange} className='border outline-none rounded-md px-3 py-2 text-xl'>
                        <option value="">select payment method</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="khalti">Khalti</option>
                    </select>
                </div>
                <button className='px-4 py-2 w-fit bg-blue-500 text-white rounded-md capitalize'>Ship to my address</button>
            </form>
        </div>
    </div>
  )
}

export default Checkout