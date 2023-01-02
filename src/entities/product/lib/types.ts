interface Image {
  id: number
  attributes: {
    name: string
    path: string
    url: string
  }
}

export interface Product {
  id: number
  attributes: {
    name: string
    description: string
    price: number
    images: {
      data: Image[]
    }
    preview: {
      data: Image
    }
    discount: number
  }
}
