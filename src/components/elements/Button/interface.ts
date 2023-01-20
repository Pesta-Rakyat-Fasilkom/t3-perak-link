import { ReactNode } from 'react'

export interface ButtonProps {
  className: string
  rightIcon?: any
  leftIcon?: any
  size: 'small' | 'large'
  variant: number
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}
