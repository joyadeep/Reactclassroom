import React,{useState,useEffect} from 'react'
import { getProductByCategory } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';

const CategoryProduct = () => {
    const [products,setProducts]=useState();
    useEffect(()=>{
        getProductByCategory('electronics').then((res)=>{
            console.log("response=",res)
            setProducts(res.data);
        }).catch((error)=>{
            console.log("error",error)
        })
    },[])
  return (
    <div className='px-20'>
        <h3 className='text-2xl font-semibold tracking-tighter' >Category Product</h3>
        <div className='grid grid-cols-4 gap-4 pt-5'>
            {
                products?.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))
            }

        </div>
    </div>
  )
}

export default CategoryProduct