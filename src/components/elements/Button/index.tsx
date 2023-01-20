import React from 'react'
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  size,
  variant,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
}) => {
  // TODO: Write element's logic

  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} flex h-fit flex-none items-center gap-1 rounded-lg font-poppins text-label-medium font-extrabold tracking-wider
        ${size == 'small' ? 'px-3 py-2' : 'px-5 py-3'}
        ${
          variant == 1 &&
          'bg-orange-normal text-cream-light transition-shadow   hover:drop-shadow-lg active:drop-shadow-none'
        }
        ${
          variant == 2 &&
          'bg-cream-normal text-primary transition-colors hover:text-[#9A631280] hover:text-opacity-50 active:text-primary'
        }
        ${
          variant == 3 &&
          'bg-orange-light text-primary transition-shadow   hover:drop-shadow-lg active:drop-shadow-none'
        }
        ${
          variant == 4 &&
          'bg-cream-normal text-orange-normal transition-colors hover:text-[#9A631280] hover:text-opacity-50 active:text-orange-normal'
        } `}
      >
        {leftIcon && <span className="stroke-current">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="stroke-current">{rightIcon}</span>}
      </button>
    </>
  )
}
