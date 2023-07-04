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
    <div className='flex justify-between px-60 gap-5 pt-5 pb-10' >
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