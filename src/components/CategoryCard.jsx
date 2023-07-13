import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <div className=' w-fit whitespace-nowrap text-slate-500 hover:text-black text-center cursor-pointer text-lg '>
        {category}
    </div>
  )
}

export default CategoryCard