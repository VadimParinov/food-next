import { Cart } from '@/entities/cart'

export const getCartSum = (cart: Cart[]): number => {
  return cart.reduce((sum, item) => {
    return sum + item.product.attributes.price * item.count
  }, 0)
}
