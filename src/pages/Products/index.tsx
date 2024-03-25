import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useProductData from "../../hooks/useProductData";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import useFavoritesData from "../../hooks/useFavoriteData";
import { FavoriteData } from "../../interfaces/favorite-data.interface";

const Products = () => {
  const user = useSelector((rootReducer) => rootReducer.userReducer);
  const { data: productData, isLoading: isProductLoading, error, isError } = useProductData();
  const { data: favData, isLoading: isFavLoading } = useFavoritesData(user.id);

  const products = useMemo(() => {
    if (!productData || !favData || isProductLoading || isFavLoading) {
      return [];
    }

    return productData.map((product) => {
      const isFav = favData.some((favorite: FavoriteData) => favorite.itemId == product.itemId);

      return {
        ...product,
        favorite: isFav,
      };
    });
  }, [favData, productData, isFavLoading, isProductLoading]);

  return (
    <div>
      {isProductLoading || isFavLoading ? <Loading /> : null}
      {isError ? <ErrorMessage message={error.response.data.message} /> : null}
      {!isProductLoading && !isFavLoading && products ? <ProductList data={products} /> : null}
    </div>
  );
};

export default Products;
