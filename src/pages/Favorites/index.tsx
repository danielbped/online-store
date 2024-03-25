import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useFavoritesData from "../../hooks/useFavoriteData";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";

const Favorites = () => {
  const user = useSelector((rootReducer: any) => rootReducer.userReducer);
  const { data, isLoading, error, isError } = useFavoritesData(user.id);

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { !isLoading && data && <ProductList data={ data } />}
    </div>
  );
};

export default Favorites;