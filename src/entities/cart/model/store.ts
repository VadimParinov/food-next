import { atom } from 'jotai'
import { Cart } from '@/entities/cart'

export const cartAtom = atom<Cart[]>([])
