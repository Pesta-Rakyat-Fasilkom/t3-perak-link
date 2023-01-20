import React from 'react'
import { IconProps } from './interface'

export const Copy: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19.556H18V8.55603H10V19.556ZM8 8.54803C8 7.44803 8.902 6.55603 10.009 6.55603H17.991C19.101 6.55603 20 7.44903 20 8.54803V19.564C20 20.664 19.098 21.556 17.991 21.556H10.01C9.74722 21.5572 9.48679 21.5066 9.24356 21.4072C9.00034 21.3077 8.77908 21.1613 8.59244 20.9763C8.40579 20.7913 8.25741 20.5714 8.15576 20.3291C8.05411 20.0868 8.00118 19.8268 8 19.564V8.54803Z"
        fill="white"
      />
      <path
        d="M5 16.556V5.54803C5 4.44803 5.902 3.55603 7.009 3.55603H15V16.556H5ZM7 16.556H15V5.55603H7V16.556Z"
        fill="white"
      />
    </svg>
  )
}
