import React from 'react'

const Error = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-9xl font-bold'>404</h1>
        <h3 className='text-2xl'>Oops ! page not found</h3>
        <button className='outline-none border-transparent bg-slate-300 px-4 py-2 rounded-md'>go Back</button>
    </div>
  )
}

export default Error