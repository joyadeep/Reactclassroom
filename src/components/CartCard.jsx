import React from 'react'

const CartCard = () => {
  return (
    <div className=' px-3 py-2 flex items-center justify-between'>
        <div>
            image and name
        </div>
        <div className='font-semibold'>$112</div>
        <button className='border rounded-md  px-4 py-2 hover:bg-red-500 hover:text-white'>Remove</button>
    </div>
  )
}

export default CartCard