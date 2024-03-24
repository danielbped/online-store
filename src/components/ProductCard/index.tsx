import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledProductCard } from "./style";

const ProductCard = (props: ProductCardProps) => {
  const handleClick = () => {
    return props.handleNavigate ? props.handleNavigate(`product/${props.product.id}`) : null;
  };

  return (
    <StyledProductCard onClick={ () => handleClick() }>
      <p>{ props.product.title }</p>
      <img src={ props.product.images[0].src } alt={ props.product.title } />
      <p>{ props.product.variants[0].price }</p>
    </StyledProductCard>
  )
};

export default ProductCard;