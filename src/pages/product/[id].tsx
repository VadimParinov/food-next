import React from 'react'
import { ProductView } from '@/views/product-view'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fetchProducts } from '@/entities/product/model/product-requests'
import { AxiosResponse } from 'axios'
import { CollectionResponse } from '@/shared/@types'
import { Product } from '@/entities/product'
import { QueryClient } from 'react-query'

const ProductPage = () => {
  return <ProductView />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await Promise.allSettled([
    fetchProducts({
      params: {
        populate: ['images', 'preview'],
      },
    }),
  ])
  // TODO: по идее нужно переделать это
  const successfulResponse = response.find(res => res.status === 'fulfilled') as PromiseFulfilledResult<
    AxiosResponse<CollectionResponse<Product>, undefined>
  >
  const paths = successfulResponse.value.data.data.map(product => ({
    params: {
      id: `${product.id}`,
    },
  }))
  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = new QueryClient()
  return {
    props: {},
  }
}
export default ProductPage
