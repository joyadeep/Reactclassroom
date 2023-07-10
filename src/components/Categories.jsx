import React,{useState,useEffect} from 'react'
import { getAllCategories } from '../api/productsAPI';
import CategoryCard from './CategoryCard';
import Skeleton from 'react-loading-skeleton'
import { useSelector,useDispatch } from 'react-redux';
import { ADD_CATEGORY_LIST } from '../features/product/productSlice';


const Categories = () => {
    const categories=useSelector((state)=>state.product.categories)
    const dispatch=useDispatch();
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        categories.length===0 &&
        setIsLoading(true)
        getAllCategories().then((res)=>{
            dispatch(ADD_CATEGORY_LIST(res.data))
        }).catch((error)=>{
            console.log("error",error)
        })
        .finally(()=>setIsLoading(false))
    },[categories?.length,dispatch])
  return (
    <>
    <div className='flex justify-between px-5 overflow-x-scroll md:px-60 gap-5 pt-5 pb-10 no-scrollbar ' >
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