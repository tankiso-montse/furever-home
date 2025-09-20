import React from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children?: React.ReactNode
}


function Button({children}: ButtonProps) {
  return (
    <button className={twMerge('bg-primary text-secondary border border-secondary rounded-3xl font-inter font-medium px-8 py-2 h-12 hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer')}>
     {children}
    </button>
  )
}

export default Button