import { Product, PRODUCT_COLLECTION_TARGET } from '@/entities/product'
import { queryFetchFactory } from '@/shared/lib'
import { CollectionResponse } from '@/shared/@types'

export const queryProductFetch = queryFetchFactory<CollectionResponse<Product>>(PRODUCT_COLLECTION_TARGET, {
  params: {
    populate: ['preview', 'images'],
  },
})
