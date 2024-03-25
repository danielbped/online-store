export interface FavoriteData {
  id: string,
  title: string,
  images: string[],
  price: string,
  itemId: string,
}

export interface FavoriteResponse {
  products: FavoriteData[],
}