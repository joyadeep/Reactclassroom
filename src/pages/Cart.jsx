import React from 'react'
import CartCard from '../components/CartCard'
import { useSelector } from 'react-redux';
import { calculteTotalPrice } from '../features/cart/cartSlice';
import {useNavigate} from 'react-router-dom'

const Cart = () => {
    const cartItems= useSelector((state)=>state.cart.cart) 
    const total=useSelector(calculteTotalPrice)
    const navigate=useNavigate();
  return (
    <div className='min-h-screen px-5 md:px-20 pt-14'>
        <h1 className='text-2xl font-semibold '>Cart</h1>
        <div className='flex flex-col md:flex-row gap-3'>
            {/* left side of cart */}
            <div className='w-full md:w-8/12 border rounded-md border-slate-300'  >
                {
                    cartItems.map((item)=>(
                        <CartCard key={item.id} product={item} />
                    ))
                }
            </div>

            {/* right side of cart */}
            <div className='md:4/12'>
                {/* coupon code  */}
                <div className='rounded-md border p-4'>
                    <p className='text-xl font-medium'>Have Coupon ?</p>
                    <form className='h-10 w-fit flex'>
                        <input type="text" placeholder='coupon code' maxLength={6} className='h-full w-2/3 pl-3 rounded-l-md outline-none text-2xl font-semibold tracking-widest text-slate-800 bg-slate-200 placeholder:font-normal placeholder:text-xl placeholder:tracking-normal ' />
                        <button className='bg-blue-500 rounded-r-md text-white px-4 py-2' >Apply</button>
                    </form>
                </div>
                {/* Total price */}
                <div className='rounded-md border p-4 mt-3 text-center'>
                    <div className='flex justify-between text-xl'>
                        <p>Total Amount</p>
                        <p className='font-semibold' >$ {total}</p>
                    </div>
                    <div className='flex justify-between text-xl'>
                        <p>Discount</p>
                        <p className='font-semibold' >$ 0</p>
                    </div>
                    <div className='flex justify-between text-xl'>
                        <p>Total</p>
                        <p className='font-semibold' >$ {total}</p>
                    </div>
                     <button onClick={()=>navigate("/checkout")}  className='px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-blue-400 hover:bg-blue-600'>Checkout</button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Cart