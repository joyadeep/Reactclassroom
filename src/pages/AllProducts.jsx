import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import { getProducts } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import Search from '../components/Search';
import CardSkeleton from '../components/CardSkeleton';
import {ADD_PRODUCT_LIST } from '../features/product/productSlice';
import { useSelector,useDispatch } from 'react-redux';

const AllProducts = () => {
    const products=useSelector((state)=>state.product.product)
    const [isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
        products.length===0 &&
        setIsLoading(true);
        getProducts().then((res)=>{
            console.log("products =",res);
            dispatch(ADD_PRODUCT_LIST(res.data))
        }).catch((error)=>{
            console.log("error",error)
        })
        .finally(()=>setIsLoading(false))
    },[])
  return (
    <div className='min-h-screen pb-10 pt-14'>
        <Slider/>
        <Categories/>
        <Search/>
        <div className=' px-5 md:px-20 pt-5 grid grid-cols-2 md:grid-cols-4 gap-4'  >
           {
            isLoading ? [1,2,3,4,5,6,7,8].map((index)=><CardSkeleton key={index} />) :
            products?.map((product)=>(
                <ProductCard key={product.id}  product={product}  />
            ))
           }
        </div>
    </div>
  )
}

export default AllProducts