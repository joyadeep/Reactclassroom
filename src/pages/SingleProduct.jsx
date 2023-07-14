import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/productAPI';

const SingleProduct = () => {
    const [singleProduct,setSingleProduct]=useState();
    const {id}=useParams();

    useEffect(()=>{
        getProductByID(id).then((res)=>{
            setSingleProduct(res.data)
        }).catch((error)=>console.log("error",error))
    },[])

  return (
    <div className='min-h-screen px-5 md:px-20 flex flex-col ' >
        <div className="w-full h-fit md:h-96 flex flex-col md:flex-row gap-10 border px-5 py-3 rounded-md overflow-hidden ">
            <img src={singleProduct?.image} alt="" className='w-2/3 md:w-1/3 mx-auto object-contain' />
            <div className='flex flex-col gap-4' >
                <h1 className='text-2xl '>{singleProduct?.title}</h1>
                <p>{singleProduct?.description}</p>
                <p className='font-semibold text-xl'>{singleProduct?.price}</p>
                <div className='flex justify-evenly'>
                    <button className='bg-green-600 text-white py-3 px-6 rounded-md text-xl'  >Add to cart</button>
                    <button className='bg-blue-600 text-white py-3 px-6 rounded-md text-xl' >Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct