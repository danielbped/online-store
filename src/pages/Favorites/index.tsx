import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useFavoritesData from "../../hooks/useFavoriteData";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse } from "../../interfaces/login-data.interface";

const Favorites = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);

  const user = useSelector((rootReducer: any) => rootReducer.userReducer);
  const { data, isLoading, error, isError } = useFavoritesData(user.id, token);

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { !isLoading && data && <ProductList data={ data } />}
    </div>
  );
};

export default Favorites;