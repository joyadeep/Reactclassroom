import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='w-full text-center'>
        <AiOutlineLoading3Quarters className='text-6xl mx-auto animate-spin'/>
    </div>
  )
}

export default Loading