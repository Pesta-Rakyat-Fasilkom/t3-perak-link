import { Spinelipse } from '@icons'
import React from 'react'

export const Loadingtoast: React.FC = () => {
  // TODO: Write element's logic

  return (
    <>
      <div className="flex w-fit items-center gap-3 rounded-lg border-2 border-[#65452C] bg-[#A39B74] px-5 py-3  font-poppins text-label-large tracking-wider text-[#F4EFD3]">
        <Spinelipse />
        Loading
      </div>
    </>
  )
}
