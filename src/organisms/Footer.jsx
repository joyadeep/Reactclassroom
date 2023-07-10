import React from 'react'
import { twMerge } from 'tailwind-merge'

const Footer = ({className,children,...props}) => {
  return (
    <footer className={twMerge('bg-black text-white p-10',className)}>
        {children}
    </footer>
  )
}

export default Footer