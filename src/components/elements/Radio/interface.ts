import { ReactNode } from 'react'

export interface RadioProps {
  name: string
  value: string
  handleChange: (id: any) => void
  isSelected: boolean
  children: ReactNode
}
