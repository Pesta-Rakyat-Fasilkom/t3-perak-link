import React from 'react'
import { IconProps } from './interface'

export const Chevrondown: React.FC<IconProps> = ({
  fill = 'none',
  stroke = 'black',
  className,
  size = 'w-[25px] h-[25px]',
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${className}`}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
