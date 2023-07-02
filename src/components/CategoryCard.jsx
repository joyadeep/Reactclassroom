import React from 'react'

const CategoryCard = ({category}) => {
  return (
    <div className='h-fit text-white text-center border rounded-md py-5 cursor-pointer text-lg font-medium odd:bg-gradient-to-r from-indigo-500 to-pink-500 even:bg-gradient-to-r even:from-pink-500 even:to-indigo-500 hover:shadow-xl '>{category}</div>
  )
}

export default CategoryCard