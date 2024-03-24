import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledProductCard } from "./style";

const ProductCard = (props: ProductCardProps) => {
  return (
    <StyledProductCard onClick={ () => props.handleNavigate(`product/${props.product.id}`) }>
      <p>{ props.product.title }</p>
      <img src={ props.product.images[0].src } alt={ props.product.title } />
      <p>{ props.product.variants[0].price }</p>
    </StyledProductCard>
  )
};

export default ProductCard;