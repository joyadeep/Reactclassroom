import React, { useState } from 'react'
const Search = () => {
    const [query,setQuery]=useState('');
    const [searchData,setSearchData]=useState([])
   
  return (
    <div className='px-20 text-center relative' >
        <form className='text-xl h-14 flex items-center justify-center'>
            <input type="search" name="query" onChange={(e)=>setQuery(e.target.value)} placeholder='Search products' className=' w-1/2 h-full bg-slate-100 py-3 pl-5 pr-3 rounded-full outline-none  ' />
        </form>
        {
            query !== '' && <div className="bg-slate-50 h-36 w-5/12 absolute mx-auto left-0 right-0 mt-1 rounded-md py-3 border">
            <h4 className='text-xl font-medium text-slate-600'>No product found</h4>
    </div>
        }
    </div>
  )
}

export default Search