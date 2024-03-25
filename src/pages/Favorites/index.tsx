import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useFavoritesData from "../../hooks/useFavoriteData";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse } from "../../interfaces/login-data.interface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Favorites = () => {
  const [token, setToken] = useLocalStorage<LoginResponse | null>("token", null);

  const user = useSelector((rootReducer: any) => rootReducer.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id === '') {
      setToken(null);
      navigate('/login');
    }
  }, [user.id])

  const { data, isLoading, error, isError } = useFavoritesData(user.id, token);

  const products = data ? data.map((product) => ({ ...product, favorite: true })) : [];

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { !isLoading && data && <ProductList data={ products } />}
    </div>
  );
};

export default Favorites;