import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/productAPI'
import { useSelector,useDispatch } from 'react-redux';
import { ADD_PRODUCT_LIST } from '../features/product/productSlice'
import Search from '../components/Search'
import CardSkeleton from '../components/CardSkeleton'

const AllProducts = () => {

    const products=useSelector((state)=>state.product.products)
    const dispatch=useDispatch();
    const [isLoading,setIsLoading]=useState(false);

    
    useEffect(()=>{
        products.length===0 &&
        setIsLoading(true);
        getProducts().then((res)=>{
            dispatch(ADD_PRODUCT_LIST(res.data))
        }).catch((error)=>{
            console.log("error",error);
        }).finally(()=>setIsLoading(false))
    },[])

  return (
    <div className='min-h-screen  pb-14' >
        <Slider/>
        <Categories/>
        <Search/>
        <div className='px-5 md:px-20 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                isLoading ?[1,2,3,4,5,6,7,8].map((item)=>(
                    <CardSkeleton key={item} />
                ))
                 : products.map((product,index)=>(
                    <ProductCard key={index} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts