import { FC } from 'react'
import { NextImage } from '@/shared/ui'
import { BASE_TARGET } from '@/shared/config'
import NumericInput from 'react-numeric-input'
import Trash from '@/shared/assets/icons/common/trash.svg'
import { Cart, removeCartItem, updateCartItem } from '@/entities/cart'
import { useUpdateAtom } from 'jotai/utils'

export interface CartItemProps {
  item: Cart
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const removeItem = useUpdateAtom(removeCartItem)
  const updateCount = useUpdateAtom(updateCartItem)
  return (
    <div className='flex flex-col desktop:flex-row bg-surface p-4 mb-6 desktop:items-center justify-between  shadow-md rounded-md'>
      <div className='flex items-center'>
        <div className='w-32 h-32 desktop:w-20 desktop:h-20 relative'>
          <NextImage
            className='object-cover object-center'
            src={BASE_TARGET + item.product.attributes.preview.data.attributes.url}
          />
        </div>
        <div className='flex flex-col pl-4'>
          <div className='text-2xl text-surface-text'>{item.product.attributes.name}</div>
        </div>
      </div>
      <div className='flex items-center mt-4 desktop:mt-0'>
        <div>
          <NumericInput
            className='counter'
            value={item.count}
            onChange={e => updateCount({ product: item.product, count: e })}
            defaultValue={1}
            min={1}
            strict
            mobile
            max={10}
          />
        </div>
        <h3 className=' w-[110px] text-center mx-8'>
          {item.product.attributes.price} <span>₽</span>
        </h3>
        <div className='w-6 h-6 cursor-pointer' onClick={() => removeItem(item.product)}>
          <Trash />
        </div>
      </div>
    </div>
  )
}
