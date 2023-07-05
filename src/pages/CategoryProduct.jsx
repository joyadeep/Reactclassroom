import React,{useState,useEffect} from 'react'
import { getProductByCategory } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import CardSkeleton from '../components/CardSkeleton';

const CategoryProduct = () => {
    const [products,setProducts]=useState();
    const {category}=useParams()
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        setIsLoading(true);
        getProductByCategory(category).then((res)=>{
            console.log("category products=",res)
            setProducts(res.data);
        }).catch((error)=>{
            console.log("error",error)
        }).finally(()=>setIsLoading(false))
    },[category])
  return (
    <div className='px-20 py-10'>
        <h3 className='text-2xl font-semibold tracking-tighter' >Category Product</h3>
        <div className='grid grid-cols-4 gap-4 pt-5'>
            {
                isLoading ?
                [1,2,3,4].map((index)=>(
                    <CardSkeleton key={index}/>
                ))
                :
                products?.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))
            }

        </div>
    </div>
  )
}

export default CategoryProduct