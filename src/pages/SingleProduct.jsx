import React,{useEffect,useState} from 'react'
import { getProductByCategory, getProductByID } from '../api/productsAPI';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import CardSkeleton from '../components/CardSkeleton';
import Skeleton from 'react-loading-skeleton';
import { ADD_ITEM } from '../features/cart/cartSlice';
import {useDispatch} from 'react-redux'  
import {toast} from 'react-toastify'


const SingleProduct = () => {
  const [products,setProducts]=useState();
  const [singleProduct,setSingleProduct]=useState();
  const [isLoading,setIsLoading]=useState(false);
  const [isProductLoading,setIsProductLoading]=useState(false);
  const {id} = useParams();
  const dispatch=useDispatch();

  useEffect(()=>{
    setIsLoading(true);
    getProductByID(id).then((res)=>{
        console.log("single products=",res)
        setSingleProduct(res.data);
    }).catch((error)=>{
        console.log("error",error)
    })
    .finally(()=>setIsLoading(false))
},[id])

  useEffect(()=>{
    setIsProductLoading(true);
      singleProduct?.category && 
      getProductByCategory(singleProduct?.category).then((res)=>{
        console.log("category products=",res)
        setProducts(res.data);
    }).catch((error)=>{
        console.log("error",error)
    }).finally(()=>setIsProductLoading(false))
  },[singleProduct?.category])


  const handleClick=(singleProduct)=>{
    dispatch(ADD_ITEM(singleProduct));
    toast.success("Item added to cart successfully !")

  }

  return (
    <div className='min-h-screen pt-16 flex flex-col px-5 md:px-20 pb-10'>
        {
            isLoading ? 
            <div className='w-full h-fit flex flex-col md:flex-row gap-10 bg-slate-50 border px-5 py-3 rounded-md overflow-hidden'>
            <Skeleton height={350} width={300} />
            <div className='flex flex-col gap-4 w-full'>
                <Skeleton height={30} />
                <Skeleton count={5} />
                <Skeleton height={30} width={100} />
            </div>
        </div>
            :
            <div className='w-full h-fit md:h-96 flex flex-col md:flex-row gap-10 bg-slate-50 border px-5 py-3 rounded-md overflow-hidden'>
            <img src={singleProduct?.image} alt="" className='w-2/3 md:w-1/3 mx-auto  object-contain' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl'>{singleProduct?.title}</h1>
                <p>{singleProduct?.description}</p>
                <p className='font-semibold text-xl'>$ {singleProduct?.price}</p>
                <div className='flex justify-evenly'>
                    <button onClick={()=>handleClick(singleProduct)} className='bg-green-600 text-white py-3 px-6 rounded-md text-xl'>Add to cart</button>
                    <button className='bg-blue-600 text-white py-3 px-6 rounded-md text-xl' >Buy Now</button>
                </div>
            </div>
        </div>
        }

        <div className='mt-10'>
          <h4 className='text-2xl text-slate-600 font-semibold capitalize'>products you might like</h4>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-5'>
            {
                isProductLoading ?
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
    </div>
  )
}

export default SingleProduct