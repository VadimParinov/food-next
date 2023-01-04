import { FC } from 'react'
import { Button, NextImage } from '@/shared/ui'
import { Product } from '@/entities/product'
import { BASE_TARGET } from '@/shared/config'
import { addCartItem, cartAtom, removeCartItem, updateCartItem } from '@/entities/cart'
import { useAtomValue } from 'jotai'
import NumericInput from 'react-numeric-input'
import { useUpdateAtom } from 'jotai/utils'
import Trash from '@/shared/assets/icons/common/trash.svg'

export interface ProductCardProps {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cart = useAtomValue(cartAtom)
  const addToCart = useUpdateAtom(addCartItem)
  const updateCount = useUpdateAtom(updateCartItem)
  const removeItem = useUpdateAtom(removeCartItem)

  const cartItem = cart.find(item => item.product.id === product.id)
  return (
    <div className='relative flex group cursor-pointer bg-surface flex-col w-full max-w-[290px] h-[100%] min-h-[385px] shadow-md rounded overflow-hidden'>
      <div className='relative w-full max-h-[250px] h-full'>
        <NextImage
          src={BASE_TARGET + product.attributes.preview.data.attributes.url}
          alt={product.attributes.preview.data.attributes.name}
          className='object-cover'
        />
      </div>
      {product.attributes.discount && (
        <div className='absolute top-32 text-surface h-8 w-14 rounded-md left-2 flex items-center justify-center bg-primary'>
          -{product.attributes.discount}%
        </div>
      )}
      <div className='flex flex-col justify-between w-[100%] h-[100%] p-[8px] pb-[20px] text-surface-text'>
        <div className='font-bold text-xl'>
          {product.attributes.price} <span>₽</span>
        </div>
        <h3 className='text-surface-text font-semibold'>{product.attributes.name}</h3>
        <div className='w-[100%] mt-[20px]'>
          {cartItem ? (
            <div className='flex justify-between items-center'>
              <NumericInput
                className='counter'
                onChange={e => updateCount({ product, count: e })}
                value={cartItem.count}
                defaultValue={1}
                min={1}
                strict
                mobile
                max={10}
              />
              <div className='w-6 h-6' onClick={() => removeItem(product)}>
                <Trash />
              </div>
            </div>
          ) : (
            <Button variant='primary' size='M' className='w-full' onClick={() => addToCart(product)}>
              В корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
