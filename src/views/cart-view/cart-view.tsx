import { Button, NextImage } from '@/shared/ui'
import NumericInput from 'react-numeric-input'
import { useAtomValue } from 'jotai'
import { cartAtom, removeCartItem, updateCartItem } from '@/entities/cart'
import { BASE_TARGET } from '@/shared/config'
import { getCartSum } from '@/entities/cart/lib/get-cart-sum'
import Trash from '@/shared/assets/icons/common/trash.svg'
import { useUpdateAtom } from 'jotai/utils'
export const CartView = () => {
  const cart = useAtomValue(cartAtom)
  const removeItem = useUpdateAtom(removeCartItem)
  const updateCount = useUpdateAtom(updateCartItem)
  return (
    <div className='container flex flex-col justify-center w-full h-full'>
      <h1 className='text-surface-text desktop:mt-16'>Корзина</h1>
      <div className='flex flex-col desktop:flex-row gap-x-8 w-full mt-6 desktop:mt-16'>
        <div className='grow flex flex-col'>
          {cart.map((item, index) => (
            <div
              className='flex flex-col desktop:flex-row bg-surface p-4 mb-6 desktop:items-center justify-between  shadow-md rounded-md'
              key={index}
            >
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
          ))}
        </div>
        <div className='w-full desktop:max-w-xs flex flex-col'>
          <div className='flex justify-between items-center border-b-2 border-ligtest pb-6'>
            <h3 className='text-hard'>{cart.length} товара</h3>
            <h3 className='text-surface-text'>{getCartSum(cart)}</h3>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <h3 className='text-hard'>Итого</h3>
            <h3 className='text-surface-text font-semibold text-2xl'>{getCartSum(cart)}</h3>
          </div>
          <Button variant='primary' size='L' className='w-full mt-10'>
            {' '}
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  )
}
