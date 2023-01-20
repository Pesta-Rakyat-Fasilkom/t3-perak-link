import { Dispatch, SetStateAction } from 'react'

export interface ToggleProps {
  setEnabled: Dispatch<SetStateAction<boolean>>
  enabled: boolean
}
