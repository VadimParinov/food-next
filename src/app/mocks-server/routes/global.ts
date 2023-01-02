import { rest } from 'msw'
import { addBaseDataURL } from '@/app/mocks-server/helpers'
import { mock } from 'mockjs'
import { LANDING_MOCK, PRODUCT_COLLECTION_MOCK } from '@/shared/config'
export const global = [
  rest.get(addBaseDataURL('/landing'), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mock(LANDING_MOCK)))
  }),
  rest.get(addBaseDataURL('/products'), (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mock(PRODUCT_COLLECTION_MOCK)))
  }),
]
