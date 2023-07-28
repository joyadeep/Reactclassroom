import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';

const Search = () => {
    const productList=useSelector((state)=>state.product.products)
    const [query,setQuery]=useState("");
    const [searchData,setSearchData]=useState([]);
    const navigate=useNavigate();
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        setIsLoading(true);
        if(query===""){
            setSearchData([])
        }
        else {
            const searchResult=productList.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()))
            var timeout=setTimeout(()=>{
                setSearchData(searchResult);
                setIsLoading(false);
            },1500)//1.5 sec
        }

        return (()=>clearTimeout(timeout))
        
    },[query])
    // if query value changes -> rerun useeffect hook.

  return (
    <div className='px-5 md:px-20 text-center relative'>
        <form className='text-xl h-14 flex items-center justify-center'>
            <input type="search" name="query" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='search product' className='w-full md:w-1/2 outline-none rounded-full bg-slate-200 px-10 py-3'  />
        </form>
        {
            query !== "" && 
            <div className='bg-slate-50 overflow-y-auto shadow-lg max-h-96 w-full md:w-1/2 mx-auto absolute left-0 right-0 rounded-md py-3 border mt-2 '>
                {
                    isLoading ? 
                    [1,2,3].map((item)=>(
                        <div key={item}className='text-xl text-left px-2 flex gap-2' >
                            <Skeleton height={60} width={60} />
                            <div className='w-full'>
                                <Skeleton height={20} />
                                <Skeleton height={50} />
                            </div>
                        </div>
                    ))
                   : searchData.length === 0 ? <h4 className='text-lg font-medium text-slate-600'>No Product Found !</h4>
                    : searchData.map((product)=>(
                        <div onClick={()=>navigate(`/product/${product.id}`)} className='cursor-pointer hover:bg-stone-100 py-1 flex items-center text-left'>
                            <img src={product.image} alt="" className='w-14 h-14 object-contain' />
                            <div>
                             <p className='text-xs'>{product.title}</p>
                             <p className='font-bold'>{product.price}</p>   
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