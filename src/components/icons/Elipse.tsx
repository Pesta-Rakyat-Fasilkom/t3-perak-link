import React from 'react'
import { IconProps } from './interface'

export const Elipse: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      width="250"
      height="99"
      viewBox="0 0 250 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M247.9 49.1294C247.9 55.1351 244.812 61.0792 238.747 66.7144C232.68 72.3521 223.786 77.5259 212.62 81.9146C190.3 90.687 159.323 96.1587 125 96.1587C90.6772 96.1587 59.6995 90.687 37.3798 81.9146C26.2136 77.5259 17.3197 72.3521 11.2526 66.7144C5.18839 61.0792 2.1 55.1351 2.1 49.1294C2.1 43.1236 5.18839 37.1795 11.2526 31.5443C17.3197 25.9066 26.2136 20.7328 37.3798 16.3441C59.6995 7.57169 90.6772 2.1 125 2.1C159.323 2.1 190.3 7.57169 212.62 16.3441C223.786 20.7328 232.68 25.9066 238.747 31.5443C244.812 37.1795 247.9 43.1236 247.9 49.1294Z"
        fill="#1846AE"
        stroke="#1F1F1C"
        stroke-width="4.2"
      />
    </svg>
  )
}
