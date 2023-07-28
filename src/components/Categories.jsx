import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import {getAllCategories} from '../api/productAPI'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CATEGORY_LIST } from '../features/product/productSlice';
import Skeleton from 'react-loading-skeleton'


const Categories = () => {
    const dispatch=useDispatch();
    const categories=useSelector((state)=>state.product.categories)
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        categories.length===0 &&
        setIsLoading(true);
        getAllCategories().then((res)=>{
            dispatch(ADD_CATEGORY_LIST(res.data))
        }).catch((error)=>{
            console.log("error",error);
        }).finally(()=>setIsLoading(false));
    },[categories.length,dispatch])

  return (
    <div className='flex justify-between gap-5 md:gap-0 px-5  md:px-60 pt-5 pb-10 overflow-x-auto no-scrollbar '>
        {
            isLoading ? 
            [1,2,3,4].map((_,index)=>(
                <Skeleton key={index}  height={24} width={150} />
            ))
            :
            categories.map((category,index)=>(
                <CategoryCard key={index} category={category} />
            ))
        }
    </div>
  )
}

export default Categories