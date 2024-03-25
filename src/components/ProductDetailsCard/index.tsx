import { ProductCardProps } from "../../interfaces/components.interface";
import { StyledVendorName, StyledProductCard, StyledProductInfo, StyledProductPrice, StyledProductTitle, StyledFavoriteButton, StyledProductPriceDiv, StyledAvailableVariant, StyleAvailableVariantDiv, StyledAvailableTitle } from "./style";
import useAddFavoriteMutate from "../../hooks/useAddFavoriteMutate";
import { useSelector } from "react-redux";
import useRemoveFavoriteMutate from "../../hooks/useRemoveFavoriteMutate";
import { FavoriteData } from "../../interfaces/favorite-data.interface";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse } from "../../interfaces/login-data.interface";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import ProductDetailsCarousel from "../ProductDetailsCarousel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFavoritesData from "../../hooks/useFavoriteData";

const ProductDetailsCard = ({ product }: ProductCardProps) => {
  const user = useSelector((rootReducer: any) => rootReducer.userReducer);
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);
  const [favorited, setFavorited] = useState<boolean>(false)
  const navigate = useNavigate();

  const { data: favData } = useFavoritesData(user.id, token);

  useEffect(() => {
    if (user.id === '') {
      setToken(null);
      navigate('/login');
    }
  }, [user.id])

  useEffect(() => {
    setFavorited(favData.some(fav => fav.itemId == product.itemId))
  }, [favData, product])

  const addFav = useAddFavoriteMutate(user.id, {
    itemId: product.itemId,
    price: product.price,
    images: product.images,
    title: product.title
  }, token);

  const removeFav = useRemoveFavoriteMutate(user.id, String(product?.itemId), token);

  const removeFavorite = () => {
    removeFav.mutate()
  };

  const addFavorite = () => {
    addFav.mutate();
  };

    const handleFavorite = (product: FavoriteData) => {
    if (product?.favorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  return (
    <StyledProductCard>
      <StyledProductInfo>
        <div>
          <StyledProductTitle>{product.title}</StyledProductTitle>
          <p>Vendido por <StyledVendorName>{product.vendor}</StyledVendorName></p>
        </div>
        <StyledProductPriceDiv>
          <StyledProductPrice>R$ {product.price}</StyledProductPrice>
          {token && (
            <StyledFavoriteButton
              onClick={() => handleFavorite(product)}
            >
              {favorited ? <FaHeart /> : <CiHeart />}
            </StyledFavoriteButton>
          )}
        </StyledProductPriceDiv>
      </StyledProductInfo>
      <ProductDetailsCarousel images={product.images} />
      {product.variants.length > 1 && (
        <div>
          <StyledAvailableTitle>Modelos/Tamanhos disponíveis</StyledAvailableTitle>
          <StyleAvailableVariantDiv>
            {product.variants.map((variant) => (
              <StyledAvailableVariant>{variant.title.toUpperCase()}</StyledAvailableVariant>
            ))}
          </StyleAvailableVariantDiv>
        </div>
      )}
    </StyledProductCard>
  );
};

export default ProductDetailsCard;
