import KhaltiCheckout from 'khalti-checkout-web'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { calculteTotalPrice,EMPTY_CART } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [data,setData]=useState({fullname:"",email:"",address:"",phone:"",payment:""})
    const totalAmount=useSelector(calculteTotalPrice);
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let config = {
        "publicKey": "test_public_key_1d64d4f9ac274085a20a42e3443c2c0b",
        "productIdentity": "1234567890",
        "productName": "Drogon",
        "productUrl": "http://gameofthrones.com/buy/Dragons",
        "eventHandler": {
            onSuccess (payload) {
                // console.log(payload);
                toast.success("Payment Successful 😍");
                dispatch(EMPTY_CART());
                navigate("/");
            
            },
            onError (error) {
                // console.log(error);
                toast.error("Payment Unsuccessful 😢")
            },
            onClose () {
                console.log('widget is closing');
            }
        },
        "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(data.payment === "khalti"){
            let checkout= new KhaltiCheckout(config);
            checkout.show({amount: totalAmount * 100})
        }
        else {
            // console.log("your item is on the way !")
            toast.success("Your items are on the way !")
            dispatch(EMPTY_CART());
            navigate("/")
        }
        

    }
  return (
    <div className='px-5 md:px-20 py-10 flex flex-col md:flex-row md:gap-5'>
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

        {/* bill */}
        <aside className='h-full md:w-1/2 border-4 border-slate-400 border-dotted px-2 md:px-10 py-3 '>
            <h5 className='font-semibold text-2xl tracking-tighter text-slate-600'>My Bill</h5>
            <div className='flex justify-between mt-5 text-lg text-slate-600'>
                <p>Name</p>
                <p>{data.fullname}</p>
            </div>
            <div className='flex justify-between mt-5 text-lg text-slate-600'>
                <p>Email</p>
                <p>{data.email}</p>
            </div>
            <div className='flex justify-between mt-5 text-lg text-slate-600'>
                <p>Address</p>
                <p>{data.address}</p>
            </div>
            <div className='flex justify-between mt-5 text-lg text-slate-600'>
                <p>Phone</p>
                <p>{data.phone}</p>
            </div>
            <div className='flex justify-between mt-5 text-lg text-slate-600'>
                <p>Payment Method</p>
                <p>{data.payment}</p>
            </div>
        </aside>
    </div>
  )
}

export default Checkout