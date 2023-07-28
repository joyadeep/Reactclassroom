import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { getProductByCategory, getProductByID } from '../api/productAPI';
import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../features/cart/cartSlice';
import ProductCard from '../components/ProductCard';
import {toast} from 'react-toastify';
import CardSkeleton from '../components/CardSkeleton';
import Skeleton from 'react-loading-skeleton';

const SingleProduct = () => {
    const dispatch=useDispatch()
    const [singleProduct,setSingleProduct]=useState();
    const [products,setProducts]=useState([])
    const {id}=useParams();
    const navigate=useNavigate()
    const [isLoading,setIsLoading]=useState(false);
    const [isProductLoading,setIsProductLoading]=useState(false);

    useEffect(()=>{
        setIsLoading(true)
        getProductByID(id).then((res)=>{
            setSingleProduct(res.data)
        }).catch((error)=>console.log("error",error))
        .finally(()=>setIsLoading(false))
    },[id])

    useEffect(()=>{
        setIsProductLoading(true);
        singleProduct?.category && getProductByCategory(singleProduct?.category).then((res)=>{
            setProducts(res.data);
        }).catch((error)=>console.log("error",error))
        .finally(()=>setIsProductLoading(false))
    },[singleProduct?.category])

    const handleBuyNow=(product)=>{
        dispatch(ADD_ITEM(product));
        navigate("/cart");
    }

    const handleAddToCart=(product)=>{
        dispatch(ADD_ITEM(product));
        toast.success("Item added to cart successfully !")
    }

     

  return (
    <div className='min-h-screen px-5 md:px-20 flex flex-col pb-5 ' >
       {
        isLoading ?
        <div className="w-full h-fit md:h-96 flex flex-col md:flex-row gap-10 border px-5 py-3 rounded-md overflow-hidden ">
        <Skeleton height={350} width={300} />
        <div className='flex flex-col gap-4 w-full ' >
            <Skeleton height={30} />
            <Skeleton count={5} />
            <Skeleton height={30} width={100} />
        </div>
    </div>
        :
        <div className="w-full h-fit md:h-96 flex flex-col md:flex-row gap-10 border px-5 py-3 rounded-md overflow-hidden ">
        <img src={singleProduct?.image} alt="" className='w-2/3 md:w-1/3 mx-auto object-contain' />
        <div className='flex flex-col gap-4' >
            <h1 className='text-2xl '>{singleProduct?.title}</h1>
            <p>{singleProduct?.description}</p>
            <p className='font-semibold text-xl'>$ {singleProduct?.price}</p>
            <div className='flex justify-evenly'>
                <button onClick={()=>handleAddToCart(singleProduct)} className='bg-green-600 text-white py-3 px-6 rounded-md text-xl'  >Add to cart</button>
                <button onClick={()=>handleBuyNow(singleProduct)} className='bg-blue-600 text-white py-3 px-6 rounded-md text-xl' >Buy Now</button>
            </div>
        </div>
    </div>
       }

        {/* recommended products */}
        <div className='mt-10'>
            <h4 className='text-2xl text-slate-600 font-semibold capitalize'>products you may like</h4>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-5'>
            {
                isProductLoading ? [1,2,3,4].map((item)=>(
                    <CardSkeleton key={item} />
                ))
               : products?.map((product)=>(
                    <ProductCard key={product.id} product={product}  />
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default SingleProduct