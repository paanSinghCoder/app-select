'use client'
import Image from 'next/image'
import { AppsDataItemType } from '../../type'
import { DropdownPropsType } from './Dropdown.types'

const Dropdown = ({ appsData, searchTerm, addToCart, cart }: DropdownPropsType) => {
  return (
    <div className="border rounded-md shadow-lg bg-white mt-3">
      <ul className="px-2 py-2 w-full rounded-md">
        {appsData
          .filter((item: AppsDataItemType) => item.label.toLowerCase().includes(searchTerm.trim().toLowerCase()))
          .map((item: AppsDataItemType) => (
            <li
              key={item.id}
              onMouseDown={() => addToCart(item)}
              className="group hover:bg-blue-500 transition hover:text-white cursor-pointer rounded-md px-3 py-2 text-xs flex items-center justify-between"
            >
              <div className="w-full h-full flex items-center gap-2">
                <Image alt={item.label} width={20} height={20} src={item.iconSrc} className="bg-white rounded-md" />
                {item.label}
              </div>
              {cart.some(app => app.id === item.id) ? (
                <span className="text-black group-hover:text-white">✓</span>
              ) : (
                <></>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Dropdown
