import { Product, PRODUCT_COLLECTION_TARGET } from '@/entities/product'
import { httpClient, queryFetchFactory } from '@/shared/lib'
import { CollectionResponse } from '@/shared/@types'
import { AxiosRequestConfig } from 'axios'

export const queryProductFetch = queryFetchFactory<CollectionResponse<Product>>(PRODUCT_COLLECTION_TARGET)

export const fetchProducts = async (config?: AxiosRequestConfig) =>
  httpClient<CollectionResponse<Product>>({
    ...config,
    url: PRODUCT_COLLECTION_TARGET,
  })
