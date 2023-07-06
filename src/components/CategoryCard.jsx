import React from 'react'
import {useNavigate} from 'react-router-dom'

const CategoryCard = ({category}) => {
  const navigate=useNavigate();
  return (
    <>
      <div onClick={()=>navigate(`/category_products/${category}`)}  className=' w-fit whitespace-nowrap text-slate-500 hover:text-black text-center cursor-pointer text-lg '>{category}</div>
    </>
  )
}

export default CategoryCard