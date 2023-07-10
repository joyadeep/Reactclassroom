import React from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({className,type,...props}) => {
  return (
    <input type={type || "text"} {...props}  className={twMerge('px-4 border rounded-md outline-none py-2 w-full text-xl',className)} />
  ) 
}

export default Input