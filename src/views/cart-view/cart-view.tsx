import { Button } from '@/shared/ui'
import { useAtomValue } from 'jotai'
import { cartAtom, CartItem } from '@/entities/cart'
import { getCartSum } from '@/entities/cart/lib/get-cart-sum'
export const CartView = () => {
  const cart = useAtomValue(cartAtom)
  return (
    <div className='container flex flex-col justify-center w-full h-full'>
      <h1 className='text-surface-text desktop:mt-16'>Корзина</h1>
      <div className='flex flex-col desktop:flex-row gap-x-8 w-full mt-6 desktop:mt-16'>
        <div className='grow flex flex-col'>
          {cart.map((item, index) => (
            <CartItem item={item} key={index} />
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
