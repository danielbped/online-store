import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";
import useProductData from "../../hooks/useProductData";
import ErrorMessage from "../../components/ErrorMessage";

const Products = () => {
  const { data, isLoading, error, isError } = useProductData();

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { !isLoading && data && <ProductList data={ data } />}
    </div>
  );
};

export default Products;