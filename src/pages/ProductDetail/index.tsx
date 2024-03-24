import { useParams } from "react-router-dom";
import useProductDetailsData from "../../hooks/userProductDetailsData";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const ProductsDetails = () => {
  const params = useParams();

  const { data, isLoading, error, isError } = useProductDetailsData(params.id);

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { data && <ProductCard product={ data?.product } /> }
    </div>
  );
};

export default ProductsDetails;