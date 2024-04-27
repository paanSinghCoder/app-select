'use client'
import { FormEventHandler, useState } from 'react'
import { appsData } from './utils/mock'
import { AppsDataItemType } from './type'
import Image from 'next/image'
import Dropdown from '@components/Dropdown'
import Content from '@components/Content'

export default function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [cart, setCart] = useState<AppsDataItemType[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const finalCart = Array.from(
    { length: 4 },
    (_, index) => cart[index] || { id: Math.random(), label: '', iconSrc: '' }
  )

  const addToCart = (item: AppsDataItemType) => {
    const isItemAlreadyInCart = cart.filter(cartItem => cartItem.label === item.label).length

    if (cart.length < 4 && !isItemAlreadyInCart) {
      setCart(prev => [...prev, item])
      setDropdownOpen(false)
    }
    setSearchTerm('')
  }

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const result = prev.filter(item => item.id !== id)

      return result
    })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    setCart([])

    alert('Submitted')
  }

  return (
    <main className="mx-auto max-w-7xl w-full pt-3 flex h-[90vh]">
      <div className="grid grid-cols-2 gap-3 h-full w-full">
        {/* First section start */}
        <section className="">
          <div className="h-full w-full flex items-center justify-center flex-col">
            <div className=" grid grid-cols-2 gap-6">
              {/* Inner 4 blocks start */}
              {finalCart.map(({ id, label, iconSrc }: AppsDataItemType) => (
                <div
                  key={id}
                  className="h-36 w-36 rounded-lg border border-gray-100 shadow-lg shadow-gray-100 flex items-center justify-center"
                >
                  {label.length ? (
                    <>
                      <div className="rounded-md text-sm text-gray-600 font-semibold border-gray-100 flex items-center justify-center gap-5 flex-col">
                        <div>{/* Empty */}</div>
                        <div className="flex flex-col items-center justify-center gap-3 h-full w-full">
                          <Image alt={label} src={iconSrc} width={32} height={32} />
                          {label}
                        </div>
                        <button
                          onClick={() => removeFromCart(id)}
                          className="text-[9px] font-extralight text-gray-500 opacity-50 hover:opacity-100 flex items-center transition"
                        >
                          <span className="text-[6px] mr-1">❌</span> Remove
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="rounded-md bg-gray-50 px-5 py-3 text-3xl text-gray-400 border font-extralight border-gray-100">
                      +
                    </div>
                  )}
                </div>
              ))}

              {/* Inner 4 blocks end */}
            </div>
            <span className="text-gray-400 text-xs pt-6">
              {cart.length} {cart.length === 1 ? 'Product' : 'Products'} added
            </span>
          </div>
        </section>
        {/* First section end */}

        {/* Second section start */}
        <section className="w-full h-full flex items-center justify-center">
          <form className="flex flex-col gap-4 max-w-96 h-80" onSubmit={handleSubmit}>
            <Content />

            <div className="w-full">
              <input
                type="text"
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                value={searchTerm}
                max={20}
                onChange={e => setSearchTerm(e.target.value)}
                className="border rounded-md py-3 mt-4 text-sm bg-slate-100 px-3 relative w-full"
                placeholder="Search for any software..."
              />
              {isDropdownOpen && (
                <Dropdown appsData={appsData} searchTerm={searchTerm} addToCart={addToCart} cart={cart} />
              )}
            </div>

            {!isDropdownOpen && (
              <button
                disabled={!cart.length}
                type="submit"
                className="bg-blue-600 rounded-md py-3 text-white text-sm mt-2 hover:bg-blue-700 disabled:bg-slate-300"
              >
                Next
              </button>
            )}
          </form>
        </section>
        {/* Second section end */}
      </div>
    </main>
  )
}
