import React from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_ITEM } from '../features/cart/cartSlice'
import {toast} from 'react-toastify';


const CartCard = ({product}) => {
  const dispatch=useDispatch();

  const handleRemove=(id)=>{
    dispatch(REMOVE_ITEM(id));
    toast.error("Item removed !");
  }

  return (
    <div className='px-3 py-2 flex items-center justify-between'>
        <div className='flex w-3/4 items-center gap-5'>
            <img src={product.image} alt='' className='w-14 h-14 object-contain' />
            <p className='text-sm'>{product.title}</p>
        </div>
        <div className='font-semibold'>$ {product.price}</div>
        <button onClick={()=>handleRemove(product.id)} className='border rounded-md px-4 py-2 hover:bg-red-500 hover:text-white' >Remove</button>
    </div>
  )
}

export default CartCard