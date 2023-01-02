// Изменить в зависимости от бэка
export const IMAGE_ENTITY_MOCK = {
  'id|+1': 1,
  name: 'test-file.png',
  originalName: 'test-file.png',
  path: 'https://dummyimage.com/266x200.png',
  url: 'https://dummyimage.com/266x200.png',
  dateCreate: '2022-03-11T12:21:53.553Z',
  dateUpdate: '2022-03-11T12:21:53.553Z',
  loading: false,
}

// Изменить в зависимости от бэка
export const FILE_ENTITY_MOCK = {
  'id|+1': 1,
  name: 'test-file.png',
  originalName: 'test-file.pdf',
  path: 'https://www.orimi.com/pdf-test.pdf',
  url: 'https://www.orimi.com/pdf-test.pdf',
  dateCreate: '2022-03-11T12:21:53.553Z',
  dateUpdate: '2022-03-11T12:21:53.553Z',
  loading: false,
}

export const PRODUCT_ENTITY_MOCK = {
  'id|+1': 1,
  attributes: {
    name: '@title(2,4)',
    description: '@paragraph(1, 3)',
    price: '@integer(100, 1000)',
    'images|1-3': [IMAGE_ENTITY_MOCK],
    preview: IMAGE_ENTITY_MOCK,
    discount: '@integer(0, 100)',
  },
}
export const PRODUCT_COLLECTION_MOCK = {
  'data|1-10': [PRODUCT_ENTITY_MOCK],
}
export const LANDING_MOCK = {
  promo: {
    'data|4': [PRODUCT_ENTITY_MOCK],
  },
  new: {
    'data|4': [PRODUCT_ENTITY_MOCK],
  },
  best: {
    'data|4': [PRODUCT_ENTITY_MOCK],
  },
}
