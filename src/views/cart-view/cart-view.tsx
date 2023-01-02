import { Button } from '@/shared/ui'
import { mock } from 'mockjs'
import { IMAGE_ENTITY_MOCK } from '@/shared/config'
import NumericInput from 'react-numeric-input'
import { useAtomValue } from 'jotai'
import { cartAtom } from '@/entities/cart'
export const CartView = () => {
  const cart = useAtomValue(cartAtom)
  return (
    <div className='container flex flex-col justify-center w-full h-full'>
      <h1 className='text-surface-text desktop:mt-16'>Корзина</h1>
      <div className='flex gap-x-8 w-full desktop:mt-16'>
        <div className='grow flex flex-col'>
          {cart.map((item, index) => (
            <div className='flex bg-surface pb-4  shadow-md rounded-md' key={index}>
              <div className='shadow-md'>
                <img src={mock(IMAGE_ENTITY_MOCK).url} alt='' className='w-20 h-20 object-cover object-center' />
              </div>
              <div className='flex flex-col pl-4 pt-2'>
                <div className='text-2xl text-surface-text'>{item.product.attributes.name}</div>
              </div>
              <div>
                <NumericInput className='counter' defaultValue={1} min={1} strict mobile max={10} />
              </div>
            </div>
          ))}
        </div>
        <div className='w-full max-w-xs flex flex-col'>
          <div className='flex justify-between items-center border-b-2 border-ligtest pb-6'>
            <div>
              <h3 className='text-hard'>3 товара</h3>
            </div>
            <div>
              <h3 className='text-surface-text'>1231</h3>
            </div>
          </div>
          <div className='flex justify-between items-center mt-6'>
            <div>
              <h3 className='text-hard'>Итого</h3>
            </div>
            <div>
              <h3 className='text-surface-text font-semibold text-2xl'>1231</h3>
            </div>
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
