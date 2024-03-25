import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledProductCard } from "./style";
import useAddFavoriteMutate from "../../hooks/useAddFavoriteMutate";
import { useSelector } from "react-redux";
import useRemoveFavoriteMutate from "../../hooks/useRemoveFavoriteMutate";

const ProductCard = ({ product }: ProductCardProps) => {
  const user = useSelector((rootReducer: any) => rootReducer.userReducer);

  const navigate = useNavigate();

  const addFav = useAddFavoriteMutate(user.id, {
    itemId: product.id,
    price: '20',
    images: product.images.map((image) => image.src),
    title: product.title
  });

  const removeFav = useRemoveFavoriteMutate(user.id, product.id);

  const handleClick = () => {
    navigate(`/product/${product.itemId || product.id}`);
  };

  const removeFavorite = () => {
    removeFav.mutate()
  }

  const addFavorite = () => {
    addFav.mutate();
  };

  const handleFavorite = (product: ProductCardProps) => {
    if (product.itemId) {
      return removeFavorite();
    } else {
      return addFavorite();
    }
  }

  return (
    <StyledProductCard onClick={handleClick}>
      <p>{ product.title }</p>
      {/* <img src={ handleImages } alt={ product.title } /> */}
      <p>{ product.price }</p>
      <button
        onClick={ () => handleFavorite(product) }
      >
        +FAV
      </button>
    </StyledProductCard>
  );
};

export default ProductCard;
