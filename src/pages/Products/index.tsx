import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useProductData from "../../hooks/useProductData";
import ErrorMessage from "../../components/ErrorMessage";

const Products = () => {
  const { data, isLoading, error, isError } = useProductData();

  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate(`/${route}`)

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { !isLoading && data && <ProductList data={ data } handleNavigate={ handleNavigate } />}
    </div>
  );
};

export default Products;