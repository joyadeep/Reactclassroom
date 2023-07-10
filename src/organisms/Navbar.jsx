import React from 'react'
import { twMerge } from 'tailwind-merge';

const Navbar = ({className,children,...props}) => {
  return (
    <header className={twMerge('shadow-md h-16 flex justify-between items-center px-20',className)}>
        {
            children
        }
    </header>
  )
}

export default Navbar