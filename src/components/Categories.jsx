import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import {getAllCategories} from '../api/productAPI'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CATEGORY_LIST } from '../features/product/productSlice';


const Categories = () => {
    const dispatch=useDispatch();
    const categories=useSelector((state)=>state.product.categories)
    useEffect(()=>{
        getAllCategories().then((res)=>{
            dispatch(ADD_CATEGORY_LIST(res.data))
        }).catch((error)=>{
            console.log("error",error);
        })
    },[])

  return (
    <div className='flex justify-between px-5 md:px-60 pt-5 pb-10 overflow-x-auto'>
        {
            categories.map((category,index)=>(
                <CategoryCard key={index} category={category} />
            ))
        }
    </div>
  )
}

export default Categories