import React, { FC } from 'react'
import { mock } from 'mockjs'
import { IMAGE_ENTITY_MOCK } from '@/shared/config'
import { CatalogPopover } from '@/shared/ui'
import Link from 'next/link'
import { useAtomValue } from 'jotai'
import { cartAtom } from '@/entities/cart'

export const Header: FC = () => {
  const cart = useAtomValue(cartAtom)
  return (
    <header className='sticky top-0 z-20  py-4 w-full flex items-center h-[70px]  bg-surface shadow-lg'>
      <div className='max-w-[1440px] mx-auto px-10 flex items-center justify-between w-full'>
        <div className='flex items-center gap-5'>
          <Link href='/'>
            <a className='flex items-center gap-3'>
              <img src={mock(IMAGE_ENTITY_MOCK).url} alt='logo' className='w-10 h-10' />
              <h2 className='text-2xl font-bold text-gray'>Logo</h2>
            </a>
          </Link>
          <CatalogPopover />
        </div>
        <div>
          <Link href={'/cart'}>
            <a className='relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              {cart.length > 0 && (
                <span className='absolute top-0 -right-4 w-4 h-4 bg-secondary rounded-full text-secondary-text text-xs flex items-center justify-center'>
                  {cart.length}
                </span>
              )}
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
