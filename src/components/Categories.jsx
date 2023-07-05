import React,{useState,useEffect} from 'react'
import { getAllCategories } from '../api/productsAPI';
import CategoryCard from './CategoryCard';
import Skeleton from 'react-loading-skeleton'

const Categories = () => {
    const [categories,setCategories]=useState();
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        setIsLoading(true)
        getAllCategories().then((res)=>{
            setCategories(res.data)
        }).catch((error)=>{
            console.log("error",error)
        })
        .finally(()=>setIsLoading(false))
    },[])
  return (
    <>
    <div className='flex justify-between px-60 gap-5 pt-5 pb-10' >
        {
            isLoading ? [1,2,3,4].map((index)=>(
                <Skeleton key={index} width={150} height={24}/>
            ))  :
            categories?.map((category,index)=>(
                <CategoryCard key={index} category={category}/>
            ))
        }
    </div>
    </>
  )
}

export default Categories