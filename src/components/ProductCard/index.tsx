import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledProductCard } from "./style";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.itemId || product.id}`);
  };

  return (
    <StyledProductCard onClick={handleClick}>
      <p>{ product.title }</p>
      <img src={ product.images[0]?.src || product.images[0] } alt={ product.title } />
      <p>{ product.price || product.variants[0].price }</p>
    </StyledProductCard>
  );
};

export default ProductCard;
