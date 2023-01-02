import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import NProgress from 'nprogress'
import { setCookie } from 'nookies'
import { i18n } from 'next-i18next'
import { withProviders } from './providers'
import { useAfterMountEffect } from '@/shared/hooks'
import { AppPropsWithLayout } from '@/shared/@types'
import { Header } from '@/widgets/header'
import { cartAtom } from '@/entities/cart'
import { useUpdateAtom } from 'jotai/utils'

NProgress.configure({ showSpinner: false })
dayjs.locale(ru)

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter()
  const setCart = useUpdateAtom(cartAtom)

  useEffect(() => {
    setCart(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') as string) : [])
    router.events.on('routeChangeStart', NProgress.start)
    router.events.on('routeChangeComplete', NProgress.done)
    router.events.on('routeChangeError', NProgress.done)
    return () => {
      router.events.off('routeChangeStart', NProgress.start)
      router.events.off('routeChangeComplete', NProgress.done)
      router.events.off('routeChangeError', NProgress.done)
    }
  }, [])

  useAfterMountEffect(() => {
    i18n?.language && setCookie(null, 'NEXT_LOCALE', i18n.language, { path: '/' })
  }, [i18n])

  const Layout = Component.Layout ?? (({ children }) => <>{children}</>)

  return (
    <>
      <Header />
      <div className='flex flex-col justify-between h-full min-h-screen'>
        <main className='flex flex-col overflow-x-hidden'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </div>
    </>
  )
}

export default withProviders(App)
