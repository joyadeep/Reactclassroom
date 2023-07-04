import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import { getProducts } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import Search from '../components/Search';

const AllProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts().then((res)=>{
            console.log("products =",res);
            setProducts(res.data)
        }).catch((error)=>{
            console.log("error",error)
        })
    },[])
  return (
    <div className='min-h-screen pb-10'>
        <Slider/>
        <Categories/>
        <Search/>
        <div className='px-20 pt-5 grid grid-cols-4 gap-4'  >
           {
            products.map((product)=>(
                <ProductCard key={product.id}  product={product}  />
            ))
           }
        </div>
    </div>
  )
}

export default AllProducts