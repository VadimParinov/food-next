import { Product } from '@/entities/product'

export interface Cart {
  product: Product
  count: number
}
