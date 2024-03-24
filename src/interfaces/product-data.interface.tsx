export interface ProductData {
  id: string,
  title: string,
  status: string,
  images: {
    src: string
  }[],
  variants: {
    price: string,
  }[]
}

export interface ProductResponse {
  products: ProductData[],
}

export interface ProductDetailResponse {
  product: ProductData,
}