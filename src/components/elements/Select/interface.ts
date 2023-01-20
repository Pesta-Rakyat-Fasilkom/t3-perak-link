import { ChangeEventHandler, ReactNode } from 'react'

export interface SelectFieldProps {
  className?: string
  variant?: 'desktop' | 'mobile'

  disabled?: boolean

  label?: string
  placeholder?: string
  message?: string
  name?: string

  leftIcon?: any
  rightIcon?: any

  value?: string | number
  onChange?:
    | ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined
  error?: boolean
  ref?: any
  type?: string
  select?: boolean
  children: ReactNode
}
