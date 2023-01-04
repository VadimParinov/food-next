import { Cart } from '@/entities/cart'
import { Product } from '@/entities/product'

export const addCartToStorage = (cart: Cart[], product: Product): Cart[] => {
  const data = [
    ...cart,
    {
      count: 1,
      product,
    },
  ]
  localStorage.setItem('cart', JSON.stringify(data))
  return data
}

export const updateCartCount = (cart: Cart[], product: Product, count: number): Cart[] => {
  const data = cart.map(item => {
    if (item.product.id === product.id) {
      return {
        ...item,
        count,
      }
    }
    return item
  })
  localStorage.setItem('cart', JSON.stringify(data))
  return data
}

export const removeItemFromCart = (cart: Cart[], product: Product): Cart[] => {
  const data = cart.filter(item => item.product.id !== product.id)
  localStorage.setItem('cart', JSON.stringify(data))
  return data
}

export const getCartFromStorage = (): Cart[] => {
  const data = localStorage.getItem('cart')
  if (data) {
    return JSON.parse(data)
  }
  return []
}
