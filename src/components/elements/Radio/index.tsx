import React from 'react'
import { RadioProps } from './interface'

export const Radio: React.FC<RadioProps> = ({
  children,
  name,
  value,
  handleChange,
  isSelected,
}) => {
  const handleChangeId = (e: any) => {
    const { id } = e.currentTarget
    handleChange(id)
  }
  return (
    <div className="flex">
      <input
        type="radio"
        className="w-0 opacity-0"
        onChange={handleChangeId}
        id={value}
        name={name}
        value={value}
      ></input>
      <label htmlFor={value} className="cursor-pointer">
        <div className="group flex select-none items-center justify-center space-x-2 font-sans">
          <div
            className={`bg-black-700 h-5 w-5 cursor-pointer rounded-full ${
              isSelected
                ? 'border-orange-3 bg-orange-2'
                : 'border-orange-3 outline-orange-3'
            }  border-orange-3 outline-orange-3 flex items-center justify-center border-2 transition-colors ease-in-out`}
          >
            <div
              className={`h-2 w-2 rounded-full  ${
                isSelected ? 'bg-orange-3' : 'bg-transparent'
              } group-hover:ring-orange-2 transition-all ease-in-out group-hover:ring-4`}
            ></div>
          </div>
          <p className="text-orange-3 font-poppins text-label-large font-extrabold">
            {children}
          </p>
        </div>
      </label>
    </div>
  )
}
