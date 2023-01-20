import React from 'react'

import { TabsProps } from './interface'

export const Tabs: React.FC<TabsProps> = ({ items, value = 0, setValue }) => {
  return (
    <div className="flex w-fit space-x-5 border-b-2 border-[#091E4224] ">
      {items.map((item: any, index: any) => (
        <div
          onClick={() => setValue(index)}
          className="group relative flex cursor-pointer select-none flex-col items-center justify-center"
          key={item}
        >
          <p
            className={`group-hover:text-orange-2 font-poppins text-title-medium font-extrabold  ${
              index === value ? 'text-orange-2' : 'text-orange-3'
            }`}
          >
            {item}
          </p>
          <div
            className={`
              bg-orange-2 absolute -bottom-0.5 -mr-0.5 rounded-sm transition-all group-hover:h-0.5 group-hover:w-full
              ${index === value ? 'h-0.5 w-full' : 'h-0 w-0'}
            `}
          ></div>
        </div>
      ))}
    </div>
  )
}
