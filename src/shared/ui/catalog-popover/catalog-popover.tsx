import React, { FC, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Button } from '@/shared/ui'
import Link from 'next/link'

export const CatalogPopover: FC = () => {
  return (
    <Popover className='relative'>
      <Popover.Button as={Fragment}>
        <Button variant='icon' size='M' childrenClassName='flex items-center gap-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
          </svg>
          <span className='hidden desktop:block'>Каталог</span>
        </Button>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Popover.Panel className='absolute top-16 z-50'>
          <div className='bg-surface shadow-md rounded-md'>
            <div className='flex flex-col flex-wrap max-h-[300px] w-[500px] gap-y-4 p-4'>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
              <Link href='/category/1'>
                <a className='text-md text-gray'>Категория 2</a>
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
