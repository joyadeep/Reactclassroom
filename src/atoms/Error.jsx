import React from 'react'
import { twMerge } from 'tailwind-merge'

const Error = ({error,className,...props}) => {
  return (
    <p {...props} className={twMerge('text-xs text-red-500 pl-2',className)}>{error}</p>
  )
}

export default Error