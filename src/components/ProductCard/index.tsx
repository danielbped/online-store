import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledProductCard } from "./style";

const ProductCard = (props: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${props.product.id}`);
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