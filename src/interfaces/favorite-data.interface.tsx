export interface FavoriteData {
  id: string,
  title: string,
  images: string[],
  price: string,
  itemId?: string,
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