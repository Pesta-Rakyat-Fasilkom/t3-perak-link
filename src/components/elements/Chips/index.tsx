import { Instagram } from '@icons'
import React, { useState } from 'react'
import { ChipsProps } from './interface'

export const Chips: React.FC<ChipsProps> = ({
  leftIcon,
  rightIcon,
  text,
  variant,
}) => {
  // TODO: Write element's logic
  const [enabled, setEnabled] = useState(false)

  const handleOnClick = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <div
        className={`flex w-fit cursor-pointer select-none items-center  gap-1 rounded-2xl px-2 py-1 font-poppins text-label-large transition-all ${
          enabled
            ? 'bg-orange-2 border-2 border-[#E9DEA6] text-[#E9DEA6]'
            : `border-orange-3 border-2  text-[#9A6312] ${
                variant == 1 && 'bg-primary'
              } ${variant == 2 && 'bg-[#EABB76]'}`
        }`}
        onClick={handleOnClick}
      >
        {leftIcon && (
          <span
            className={`${enabled ? 'stroke-[#E9DEA6]' : 'stroke-[#9A6312]'}`}
          >
            {leftIcon}
          </span>
        )}
        {text}
        {rightIcon && (
          <span
            className={`${enabled ? 'stroke-[#E9DEA6]' : 'stroke-[#9A6312]'}`}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </>
  )
}
