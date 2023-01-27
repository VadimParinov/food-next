import React, { useMemo } from 'react'
import { useProductCollection } from '@/entities/product/model/product-collection-query'
import { Disclosure } from '@headlessui/react'
import { Checkbox } from '@/shared/ui'
import Skeleton from 'react-loading-skeleton'
import { ProductCard } from '@/entities/product'

export const CatalogView = () => {
  const { data, isRefetching, isFetched } = useProductCollection({
    keepPreviousData: true,
    refetchOnMount: false,
  })
  const catalogueContent = useMemo(() => {
    if (isRefetching) {
      return Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} height={300} width={280} />)
    }
    return data?.data.map((item, index) => <ProductCard key={index} product={item} />)
  }, [isRefetching, isFetched])

  return (
    <div className='container flex mt-16 gap-x-2'>
      <div className='grow flex flex-col max-w-[300px] w-full'>
        <Disclosure>
          <Disclosure.Button className='py-2'>Производитель</Disclosure.Button>
          <Disclosure.Panel className='text-gray-500'>
            <Checkbox name='test' label='test' />
          </Disclosure.Panel>
        </Disclosure>
      </div>
      <div className='grid gap-small desktop:grid-cols-4 justify-items-center desktop:gap-large'>
        {catalogueContent}
      </div>
    </div>
  )
}
