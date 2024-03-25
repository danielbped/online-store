export interface FavoriteData {
  id?: string | null,
  title: string,
  images: string[],
  price: string,
  itemId: string,
  vendor?: string,
  favorite?: boolean
  variants: {
    title: string
  }[]
}

export interface CreateFavoriteData {
  itemId: string,
  title: string,
  images: string[],
  price: string,
}

export interface FavoriteResponse {
  products: FavoriteData[],
}