import React,{useEffect,useState} from 'react'
import model from '../assets/images/model.png'
import { getProductByCategory, getProductByID } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
const SingleProduct = () => {
  const [products,setProducts]=useState();
  const [singleProduct,setSingleProduct]=useState();
  const {id} = useParams();
  useEffect(()=>{
    getProductByID(id).then((res)=>{
        console.log("single products=",res)
        setSingleProduct(res.data);
    }).catch((error)=>{
        console.log("error",error)
    })
},[id])
  useEffect(()=>{
      getProductByCategory(singleProduct?.category).then((res)=>{
          console.log("category products=",res)
          setProducts(res.data);
      }).catch((error)=>{
          console.log("error",error)
      })
  },[singleProduct?.category])
  return (
    <div className='min-h-screen pt-10 flex flex-col px-20 pb-10'>
        <div className='w-full h-96 flex gap-10 bg-slate-50 border px-5 py-3 rounded-md overflow-hidden'>
            <img src={singleProduct?.image} alt="" className='w-1/3 object-contain' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl'>{singleProduct?.title}</h1>
                <p>{singleProduct?.description}</p>
                <p className='font-semibold text-xl'>$ {singleProduct?.price}</p>
                <div className='flex justify-evenly'>
                    <button className='bg-green-600 text-white py-3 px-6 rounded-md text-xl'>Add to cart</button>
                    <button className='bg-blue-600 text-white py-3 px-6 rounded-md text-xl' >Buy Now</button>
                </div>
            </div>
        </div>
        <div className='mt-10'>
          <h4 className='text-2xl text-slate-600 font-semibold capitalize'>products you might like</h4>
          <div className='grid grid-cols-4 gap-4 pt-5'>
            {
                products?.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))
            }

        </div>
         </div>
    </div>
  )
}

export default SingleProduct