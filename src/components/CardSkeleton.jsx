import React from 'react'
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <div className='border rounded-md overflow-hidden h-fit px-2 py-1'>
        <Skeleton height={250} className='w-full' />
        <div>
            <Skeleton height={15} count={2} />
            <div className='flex items-center justify-between'>
                <Skeleton height={20} width={60} />
                <Skeleton height={20} width={60} />
            </div>
        </div>
    </div>
  )
}

export default CardSkeleton