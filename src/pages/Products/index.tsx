import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useProductData from "../../hooks/useProductData";

const Products = () => {
  const { data, isLoading, error, isError } = useProductData();

  const navigate = useNavigate();
  const handleNavigate = (route: string) => navigate(`/${route}`)

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <p>{ error.response.data.message }</p> }
      { !isLoading && data && <ProductList data={ data } handleNavigate={ handleNavigate } />}
    </div>
  );
};

export default Products;