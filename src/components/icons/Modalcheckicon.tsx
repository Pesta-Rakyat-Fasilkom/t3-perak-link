import React from 'react'
import { IconProps } from './interface'

export const Modalcheckicon: React.FC<IconProps> = ({
  fill = 'none',
  stroke,
  className,
  size = 'w-[48px] h-[48px]',
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${className}`}
    >
      <rect width="48" height="48" rx="24" fill="#DC8F1A" />
      <path
        d="M33.3573 15.9956C33.016 15.9956 32.66 16.1076 32.4 16.3636L20.7907 27.8223C20.448 28.1596 20.104 28.097 19.8347 27.6996L15.84 21.8063C15.432 21.2049 14.5786 21.0369 13.9666 21.4383C13.356 21.8396 13.1853 22.6783 13.5933 23.2796L17.5866 29.1729C18.7893 30.9449 21.132 31.1703 22.664 29.6636L34.3147 18.2463C34.8333 17.7343 34.8333 16.8756 34.3147 16.3636C34.0547 16.1076 33.6973 15.9956 33.3573 15.9956Z"
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  )
}
