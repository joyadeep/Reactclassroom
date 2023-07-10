import React from 'react';
import { twMerge } from 'tailwind-merge';
const Button = ({className,title,...props}) => {
    // const c=twMerge("rounded-md px-4 py-2 text-lg text-white bg-blue-500",className)
  return (
    <button {...props} type={props.type || "button"} className={twMerge("rounded-md px-4 py-2 text-lg text-white bg-blue-500",className)} > {title}  </button>
  )
}

export default Button