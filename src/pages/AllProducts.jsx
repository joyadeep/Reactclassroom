import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/productAPI'
import { useSelector,useDispatch } from 'react-redux';
import { ADD_PRODUCT_LIST } from '../features/product/productSlice'

const AllProducts = () => {

    const products=useSelector((state)=>state.product.products)
    const dispatch=useDispatch();

    
    useEffect(()=>{
        getProducts().then((res)=>{
            dispatch(ADD_PRODUCT_LIST(res.data))
        }).catch((error)=>{
            console.log("error",error);
        })
    },[])

  return (
    <div className='min-h-screen  pb-14' >
        <Slider/>
        <Categories/>
        <div className='px-5 md:px-20 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                products.map((product,index)=>(
                    <ProductCard key={index} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts