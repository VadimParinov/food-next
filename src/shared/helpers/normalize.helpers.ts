import { get } from 'lodash'
import { SelectOption, TFunction } from '../@types'

export const SELECT_ALL_OPTIONS = (t: TFunction) => [{ id: '', label: t('all') }]

export const normalizeSelectOptions = <T extends {}[]>(
  data?: T,
  options?: {
    labelKey?: string
    valueKey?: string
    defaultValue?: SelectOption[]
  }
): SelectOption[] => {
  const defaultOptions = {
    defaultValue: [],
    labelKey: 'name',
    valueKey: 'id',
    ...options,
  }

  return [
    ...defaultOptions.defaultValue,
    ...(data
      ? data.map(el => ({
          label: get(el, defaultOptions.labelKey, '') as string,
          id: get(el, defaultOptions.valueKey) as number,
        }))
      : []),
  ]
}

export const normalizeStrapiFilters = (filters: Record<string, unknown>): Record<string, unknown> => {
  return {
    filters: {
      manufacturer: {
        name: {
          $eq: filters.manufacturer,
        },
      },
    },
    'pagination[page]': filters['pagination[page]'],
    'pagination[pageSize]': filters['pagination[pageSize]'],
  }
}

export const normalizeSelectOptionsFromConstantsKeysArray = (constants: string[], t: TFunction): SelectOption[] =>
  constants.map((constant, index) => ({ id: index, label: t(constant) }))

export const normalizeArrayToSeparatedString = (data: unknown[], separator: string): string =>
  data.filter(entity => entity).join(separator)
