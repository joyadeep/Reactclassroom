import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductByCategory } from '../api/productAPI';
import ProductCard from '../components/ProductCard';

const CategoryProducts = () => {
    const [products,setProducts]=useState([]);
    const {category_id} =useParams(); //electronics
    useEffect(()=>{
        getProductByCategory(category_id).then((res)=>setProducts(res.data))
        .catch((error)=>console.log("error",error))
    },[])


  return (
    <div className='px-5 md:px-20 min-h-screen' >
        <h3 className='text-2xl font-semibold tracking-tighter' >{category_id} Product</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 '>
            {
                products.map((product)=>(
                    <ProductCard key={product.id} product={product}  />
                ))
            }
        </div>
    </div>
  )
}

export default CategoryProducts