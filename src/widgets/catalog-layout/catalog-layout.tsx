import { FC } from 'react'
import { Product, ProductCard } from '@/entities/product'

export interface CatalogLayoutProps {
  products?: Product[]
}

export const CatalogLayout: FC<CatalogLayoutProps> = ({ products }) => {
  return (
    <div className='grid gap-small desktop:grid-cols-4 justify-items-center desktop:gap-large'>
      {products?.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  )
}
