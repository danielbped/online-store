import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledProductCard } from "./style";
import useAddFavoriteMutate from "../../hooks/useAddFavoriteMutate";
import { useSelector } from "react-redux";
import useRemoveFavoriteMutate from "../../hooks/useRemoveFavoriteMutate";
import { FavoriteData } from "../../interfaces/favorite-data.interface";

const ProductCard = ({ product }: ProductCardProps) => {
  const user = useSelector((rootReducer: any) => rootReducer.userReducer);

  const navigate = useNavigate();

  const addFav = useAddFavoriteMutate(user.id, {
    itemId: product.itemId,
    price: product.price,
    images: product.images,
    title: product.title
  });

  const removeFav = useRemoveFavoriteMutate(user.id, String(product?.itemId));

  const handleClick = () => {
    navigate(`/product/${product.itemId}`);
  };

  const removeFavorite = () => {
    removeFav.mutate()
  }

  const addFavorite = () => {
    addFav.mutate();
  };

  const handleFavorite = (product: FavoriteData) => {
    if (product?.favorite) {
      return removeFavorite();
    } else {
      return addFavorite();
    }
  }

  return (
    <div>
      <StyledProductCard onClick={handleClick}>
        <p>{ product.title }</p>
        <img src={ product.images[0] } alt={ product.title } />
        <p>{ product.price }</p>
      </StyledProductCard>
      <button
        onClick={ () => handleFavorite(product) }
      >
        +FAV { product.favorite && ' OK' }
      </button>
    </div>
  );
};

export default ProductCard;
