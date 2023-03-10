import Head from 'next/head'
import { CartView } from '@/views/cart-view'
import { NextPageWithLayout } from '@/shared/@types'

const Cart: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <CartView />
    </div>
  )
}

export default Cart
