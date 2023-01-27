import Head from 'next/head'
import { API_MOCKING } from '@/shared/config'
import { AppPropsWithLayout, Category, StrapiResponse } from '@/shared/@types'
import App from '@/app'
//Next.js требует импортировать глобальные стили только в _app.tsx
import '@/app/index.css'
import NextApp, { AppContext, AppProps } from 'next/app'
import { httpClient } from '@/shared/lib'

if (API_MOCKING === 'enabled') {
  require('@/app/mocks-server')
}

export interface GlobalData {
  globalData: {
    categories: {
      data: Category[]
    }
  }
  siteName: string
}

const _App = (props: AppProps<GlobalData>) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <App {...props} />
    </>
  )
}

_App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  const {
    data: {
      data: { attributes },
    },
  } = await httpClient<StrapiResponse<GlobalData>>({
    url: '/global',
    params: {
      populate: ['categories'],
      locale: appContext.ctx.locale,
    },
  })

  return {
    ...appProps,
    pageProps: {
      globalData: attributes,
    },
  }
}

export default _App
