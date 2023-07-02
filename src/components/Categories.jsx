import React,{useState,useEffect} from 'react'
import { getAllCategories } from '../api/productsAPI';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories,setCategories]=useState();
    useEffect(()=>{
        getAllCategories().then((res)=>{
            setCategories(res.data)
        }).catch((error)=>{
            console.log("error",error)
        })
    },[])
  return (
    <>
    <h1 className='text-2xl font-semibold tracking-tighter text-slate-700 px-20'>Categories</h1>
    <div className='grid grid-cols-4 px-20 gap-5 pt-5 pb-10' >
        {
            categories?.map((category,index)=>(
                <CategoryCard key={index} category={category}/>
            ))
        }
    </div>
    </>
  )
}

export default Categories