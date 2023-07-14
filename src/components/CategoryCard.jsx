import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({category}) => {
  const navigate=useNavigate();
  const handleClick=(e)=>{
    navigate(`/category_product/${category}`)
  }
  return (
    <div onClick={handleClick} className=' w-fit whitespace-nowrap text-slate-500 hover:text-black text-center cursor-pointer text-lg '>
        {category}
    </div>
  )
}

export default CategoryCard