import { MouseEventHandler } from "react";
import { ChangeEventHandler } from "react";
import { FavoriteData } from "./favorite-data.interface";

export interface InputProps {
  type: string,
  name: string,
  placeholder: string,
  title: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export interface ButtonProps {
  title: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
}

export interface ErrorMessageProps {
  message: string,
}

export interface ProductCardProps {
  product: FavoriteData,
}

export interface ProductListProps {
  data: FavoriteData[]
}

export interface ImagesCarouselProps {
  images: string[],
}