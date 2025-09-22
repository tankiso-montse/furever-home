import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  extraClasses?: string;
}
 

function Button({ children, extraClasses, ...props }: ButtonProps) {
  return (
    <button {...props} className={twMerge('bg-primary text-secondary border border-secondary text-xs sm:text-sm md:text-medium rounded-3xl font-inter font-medium px-4 sm:px-8 py-2 h-12 hover:bg-tertiary hover:border-tertiary hover:text-primary transition-all duration-300 cursor-pointer', extraClasses)}>
      {children}
    </button>
  )
}

export default Button