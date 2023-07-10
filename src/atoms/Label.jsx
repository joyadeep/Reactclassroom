import React from 'react'
import { twMerge } from 'tailwind-merge'
const Label = ({className,title,...props}) => {
  return (
    <label {...props} htmlFor={title} className={twMerge('text-sm text-slate-400',className)} >{title}</label>
  )
}

export default Label