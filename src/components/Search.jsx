import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
const Search = () => {
  const productList=useSelector((state)=>state.product.product);
  const [query,setQuery]=useState('');
  const [searchData,setSearchData]=useState([])
  const navigate=useNavigate();
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    let timeout;
    setIsLoading(true);
    if (query===""){
      setSearchData([])
    }
    else{
    const searchResult=productList.filter((item)=>item.title.toLowerCase().includes(query.toLocaleLowerCase()));
    console.log("search Result ==",searchResult)
    timeout=setTimeout(()=>{
      setSearchData(searchResult)
      setIsLoading(false)
    },1500)
    }

    return (()=>clearTimeout(timeout))


  },[productList,query])

  const handleClick=(id)=>{
    navigate(`/product/${id}`);
    setQuery('');
  }
   
  return (
    <div className='px-5 md:px-20 text-center relative' >
        <form className='text-xl h-14 flex items-center justify-center'>
            <input type="search" autoComplete='off' name="query" onChange={(e)=>setQuery(e.target.value)} placeholder='Search products' className=' w-full md:w-1/2 h-full bg-slate-100 py-3 pl-5 pr-3 rounded-full outline-none  ' />
        </form>
        {
            query !== '' && <div className="bg-slate-50 shadow-md overflow-y-auto max-h-96  w-full md:w-5/12 absolute mx-auto left-0 right-0 mt-1 rounded-md py-3 border">
          {
           isLoading ? 
           [1,2,3].map((_,index)=>(
            <div key={index} className='text-xl text-left px-2 flex gap-2 '>
            <Skeleton height={60} width={60}/>
            <div className=' w-full'>
              <Skeleton  height={20}/>
              <Skeleton width={50}/>
            </div>
           </div>
           ))
           :
           searchData.length===0 ? <h4 className='text-lg font-medium text-slate-600'>No product found</h4> :
           searchData.map((product)=>(
            <div onClick={()=>handleClick(product.id)} key={product.id} className='cursor-pointer hover:bg-stone-100 py-2 px-1 flex items-center text-left' >
                <img src={product.image} alt='' className='w-14 h-14 object-contain' />
                <div>
                  <p className='text-xs' >{product.title}</p>
                  <p className='font-bold text-sm'>$ {product.price}</p>
                </div>
            </div>
          ))
          }
    </div>
        }
    </div>
  )
}

export default Search