import React from 'react'
import model from '../assets/images/model.png'
const SingleProduct = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-10/12 h-96 flex bg-slate-300 px-5 py-3 rounded-md overflow-hidden'>
            <img src={model} alt="" className='w-1/3 object-contain' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl'>Item Title</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum praesentium in nulla velit fugiat, commodi molestiae ex perferendis expedita! Nesciunt, deserunt totam natus quam accusantium delectus eum pariatur debitis dolore!</p>
                <p className='font-semibold'>$ 135</p>
                <div className='flex justify-evenly'>
                    <button className='bg-green-600 text-white py-3 px-6 rounded-md text-xl'>Add to cart</button>
                    <button className='bg-blue-600 text-white py-3 px-6 rounded-md text-xl' >Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct