import { atom } from 'jotai'
import { addCartToStorage, Cart, removeItemFromCart, updateCartCount } from '@/entities/cart'
import { Product } from '@/entities/product'

export const cartAtom = atom<Cart[]>([])

export const addCartItem = atom(
  get => get(cartAtom),
  (get, set, product: Product) => {
    set(cartAtom, addCartToStorage(get(cartAtom), product))
  }
)

export const updateCartItem = atom(
  get => get(cartAtom),
  (get, set, { product, count }: any) => {
    set(cartAtom, updateCartCount(get(cartAtom), product, count))
  }
)

export const removeCartItem = atom(
  get => get(cartAtom),
  (get, set, product: Product) => {
    set(cartAtom, removeItemFromCart(get(cartAtom), product))
  }
)
