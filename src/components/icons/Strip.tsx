import React from 'react'
import { IconProps } from './interface'

export const Strip: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width={className == '200' ? '200' : '340'}
      height="52"
      viewBox="0 0 340 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 33.5H294.516L270.832 51.5H0.5V33.5Z"
        fill="#6DB8C2"
        stroke="black"
      />
      <path
        d="M0.5 0.5H338.596L316.527 18.5H0.5V0.5Z"
        fill="#DC8F1A"
        stroke="black"
      />
      <path
        d="M0.5 17.5H317.956L295.837 33.5011L0.5 35.4966V17.5Z"
        fill="#CA5355"
        stroke="black"
      />
    </svg>
  )
}
