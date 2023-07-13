import React from 'react'
import model from '../assets/images/model.png'
const ProductCard = ({product}) => {
  return (
    <div className='border rounded-md overflow-hidden h-fit cursor-pointer px-2 py-1 hover:shadow-lg duration-500'>
        <img src={product.image} alt="" className='h-60 w-full object-contain' />
        <div>
            <h4>{product.title}</h4>
            <div className='flex items-center justify-between'>
                <p className='font-medium' >$ {product.price}</p>
                <p className='text-slate-400'> ❤ {product.rating.rate} ({product.rating.count}) </p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard