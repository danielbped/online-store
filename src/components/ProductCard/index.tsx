import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledFavoriteButton, StyledProductCard, StyledProductImage, StyledProductInfo, StyledProductPrice, StyledProductTitle } from "./style";
import useAddFavoriteMutate from "../../hooks/useAddFavoriteMutate";
import { useSelector } from "react-redux";
import useRemoveFavoriteMutate from "../../hooks/useRemoveFavoriteMutate";
import { FavoriteData } from "../../interfaces/favorite-data.interface";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse } from "../../interfaces/login-data.interface";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useEffect } from "react";

const ProductCard = ({ product }: ProductCardProps) => {
  const user = useSelector((rootReducer: any) => rootReducer.userReducer);
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);

  const navigate = useNavigate();

  const addFav = useAddFavoriteMutate(user.id, {
    itemId: product.itemId,
    price: product.price,
    images: product.images,
    title: product.title
  }, token);

  useEffect(() => {
    if (user.id === '') {
      setToken(null);
      navigate('/login');
    }
  }, [user.id])

  const removeFav = useRemoveFavoriteMutate(user.id, String(product?.itemId), token);

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
    <StyledProductCard>
      <StyledProductImage onClick={ handleClick } src={ product.images[0] } alt={ product.title } />
      <StyledProductInfo>
        <div>
          <StyledProductTitle onClick={ handleClick }>{ product.title }</StyledProductTitle>
          <StyledProductPrice>R$ { product.price }</StyledProductPrice>
        </div>
        { token && <StyledFavoriteButton
            onClick={ () => handleFavorite(product) }
          >
            { product.favorite ? <FaHeart /> : <CiHeart /> }
          </StyledFavoriteButton> }
      </StyledProductInfo>
    </StyledProductCard>
  );
};

export default ProductCard;
