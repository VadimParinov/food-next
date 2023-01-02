import { FC } from 'react'
import { Button } from '@/shared/ui'
import { Product } from '@/entities/product'
import { BASE_TARGET } from '@/shared/config'
import { cartAtom } from '@/entities/cart'
import { useAtom } from 'jotai'
import NumericInput from 'react-numeric-input'

export interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [cart, setCart] = useAtom(cartAtom)

  //const isInCart = cart.some((item) => item.product.id === product.id)
  const cartItem = cart.find(item => item.product.id === product.id)
  const addToCart = () => {
    setCart(prev => {
      localStorage.setItem('cart', JSON.stringify([...prev, { product, count: 1 }]))
      return [...prev, { product, count: 1 }]
    })
  }

  const changeCount = (count: number | null) => {
    if (cartItem && count) {
      setCart(prev => {
        return prev.map(item => {
          if (item.product.id === product.id) {
            return {
              ...item,
              count: count,
            }
          }
          return item
        })
      })
    }
  }
  return (
    <div className='relative flex group cursor-pointer bg-surface flex-col w-full max-w-[290px] h-[100%] min-h-[385px] shadow-md rounded overflow-hidden'>
      <img
        className='w-[100%] h-[100%] object-cover object-center'
        src={BASE_TARGET + product.attributes.preview.data.attributes.url}
        alt={product.attributes.preview.data.attributes.name}
      />
      <div className='absolute top-40 text-surface h-8 w-14 rounded-md left-2 flex items-center justify-center bg-primary'>
        -{product.attributes.discount}%
      </div>
      <div className='flex flex-col justify-between w-[100%] h-[100%] p-[8px] pb-[20px] text-surface-text'>
        <div className='font-bold text-xl'>
          {product.attributes.price} <span>₽</span>
        </div>
        <h3 className='text-surface-text'>{product.attributes.name}</h3>
        <div className='w-[100%] mt-[20px]'>
          {cartItem ? (
            <NumericInput
              className='counter'
              onChange={e => changeCount(e)}
              value={cartItem.count}
              defaultValue={1}
              min={1}
              strict
              mobile
              max={10}
            />
          ) : (
            <Button variant='primary' size='M' className='w-full' onClick={addToCart}>
              В корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
