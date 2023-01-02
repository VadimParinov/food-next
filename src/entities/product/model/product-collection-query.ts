import { queryFactory, QueryParams } from '@/shared/lib'
import { PRODUCT_COLLECTION_QUERY_PRIMARY_KEY } from '@/entities/product'
import { queryProductFetch } from '@/entities/product/model/product-requests'

const productCollectionQuery = queryFactory(PRODUCT_COLLECTION_QUERY_PRIMARY_KEY, queryProductFetch)()

export const useProductCollection = (params?: QueryParams<any>) => {
  //TODO: здесь будет логика фильтров и сортировок
  const filters = {}

  return productCollectionQuery.useHookInitializer(
    { ...filters },
    {
      ...params,
    }
  )
}
