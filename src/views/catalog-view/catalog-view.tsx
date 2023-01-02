import React from 'react'
import { useProductCollection } from '@/entities/product/model/product-collection-query'
import { CatalogLayout } from '@/widgets/catalog-layout'
import { Disclosure } from '@headlessui/react'
import { Checkbox } from '@/shared/ui'

export const CatalogView = () => {
  const { data } = useProductCollection()
  return (
    <div className='container flex mt-16'>
      <div className='grow flex flex-col min-w-[300px]'>
        <Disclosure>
          <Disclosure.Button className='py-2'>Тип</Disclosure.Button>
          <Disclosure.Panel className='text-gray-500'>
            <Checkbox name='test' label='test' />
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <CatalogLayout products={data?.data} />
    </div>
  )
}
