import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className=' border rounded-md overflow-hidden h-fit cursor-pointer px-2 py-1 hover:shadow-lg duration-500' >
        <img src={product.image} alt=""  className='h-60 w-full object-contain ' />
        <div className=''>
            <h4>{product.title}</h4>
            <div className='flex items-center justify-between'>
                <h6 className='font-medium' >${product.price}</h6>
                <h6 className='text-slate-400' >❤ {product.rating.rate}({product.rating.count})</h6>
            </div>
        </div>
    </div>
  )
}

export default ProductCard