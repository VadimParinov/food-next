import { filterAtomsFactory, queryFactory, QueryParams } from '@/shared/lib'
import {
  PRODUCT_COLLECTION_INITIAL_FILTERS_ATOM_VALUES,
  PRODUCT_COLLECTION_QUERY_PRIMARY_KEY,
} from '@/entities/product'
import { queryProductFetch } from '@/entities/product/model/product-requests'
import { useAtom, useAtomValue } from 'jotai'

export const {
  'pagination[page]': productCollectionPage,
  'pagination[pageSize]': productCollectionPageSize,
  manufacturer: productCollectionManufacturer,
} = filterAtomsFactory(PRODUCT_COLLECTION_INITIAL_FILTERS_ATOM_VALUES, { storageType: 'query' })

const productCollectionQuery = queryFactory(
  PRODUCT_COLLECTION_QUERY_PRIMARY_KEY,
  queryProductFetch,
  PRODUCT_COLLECTION_INITIAL_FILTERS_ATOM_VALUES
)(filters => {
  return {
    params: {
      populate: ['preview', 'images', 'category', 'manufacturer'],
      ...filters,
    },
  }
})

export const prefetchProductCollection = productCollectionQuery.prefetch

export const useProductCollection = (params?: QueryParams<any>) => {
  //TODO: здесь будет логика фильтров и сортировок
  const [page, setPage] = useAtom(productCollectionPage)
  const pageSize = useAtomValue(productCollectionPageSize)
  const manufacturer = useAtomValue(productCollectionManufacturer)

  const filters = {
    manufacturer: manufacturer,
  }

  return productCollectionQuery.useHookInitializer(
    { ...filters, 'pagination[page]': page, 'pagination[pageSize]': pageSize },
    params
  )
}
