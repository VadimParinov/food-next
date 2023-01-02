import { FC } from 'react'
import { Banner } from '@/shared/ui'
import { CatalogLayout } from '@/widgets/catalog-layout'
import { ProductLandingResponse } from '@/entities/product/model/product-landing-request'

export interface HomePageProps {
  data: ProductLandingResponse
}

export const HomePage: FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <Banner
        imageUrl={
          'https://images.unsplash.com/photo-1523800378286-dae1f0dae656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80'
        }
      />
      <section className='container flex flex-col mt-[10px] pb-[50px] pt-20'>
        <h2 className='text-3xl font-bold text-surface-text desktop:ml-[22px] pb-10 text-center desktop:text-start'>
          Акции
        </h2>
        <CatalogLayout products={data?.data?.attributes.promo.data} />
        <h2 className='text-3xl font-bold text-surface-text desktop:ml-[22px] pb-10 mt-28 text-center desktop:text-start'>
          Новинки
        </h2>
        <CatalogLayout products={data?.data?.attributes.new.data} />
        <h2 className='text-3xl font-bold text-surface-text desktop:ml-[22px] pb-10 mt-28 text-center desktop:text-start'>
          Популярные товары
        </h2>
        <CatalogLayout products={data?.data?.attributes.best.data} />
      </section>
    </>
  )
}
