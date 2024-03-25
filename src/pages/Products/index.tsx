import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useProductData from "../../hooks/useProductData";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import useFavoritesData from "../../hooks/useFavoriteData";
import { FavoriteData } from "../../interfaces/favorite-data.interface";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse } from "../../interfaces/login-data.interface";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const user = useSelector((rootReducer) => rootReducer.userReducer);
  const { data: productData, isLoading: isProductLoading, error, isError } = useProductData();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id === '') {
      setToken(null);
      navigate('/login');
    }
  }, [user])

  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);
  const { data: favData, isLoading: isFavLoading } = useFavoritesData(user.id, token);

  const productsWithFavs = useMemo(() => {
    if (productData && favData) {
      return productData.map((product) => {
        const isFav = favData.some((favorite: FavoriteData) => favorite.itemId == product.itemId);
  
        return {
          ...product,
          favorite: isFav,
        };
      })
    } return productData || [];
  }, [favData, productData]);

  const products = token ? productsWithFavs : productData;

  return (
    <div>
      {isProductLoading || isFavLoading ? <Loading /> : null}
      {isError ? <ErrorMessage message={error.response.data.message} /> : null}
      {!isProductLoading && !isFavLoading && products ? <ProductList data={products} /> : null}
    </div>
  );
};

export default Products;
