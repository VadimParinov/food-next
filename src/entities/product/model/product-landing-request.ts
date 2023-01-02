import { AxiosRequestConfig } from 'axios'
import { httpClient } from '@/shared/lib'
import { CollectionResponse } from '@/shared/@types'
import { Product } from '@/entities/product'
import qs from 'qs'

export interface ProductLandingResponse {
  data: {
    attributes: {
      new: CollectionResponse<Product>
      best: CollectionResponse<Product>
      promo: CollectionResponse<Product>
    }
  }
}
const query = qs.stringify(
  {
    populate: {
      best: {
        populate: ['preview'],
      },
      new: {
        populate: ['preview'],
      },
      promo: {
        populate: ['preview'],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
)

export const fetchProductLanding = async (config?: AxiosRequestConfig) => {
  return httpClient<ProductLandingResponse>({
    ...config,
    url: '/landing?' + query,
  })
}
