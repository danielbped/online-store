import { useParams } from "react-router-dom";
import useProductDetailsData from "../../hooks/userProductDetailsData";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ProductDetailsCard from "../../components/ProductDetailsCard";

const ProductsDetails = () => {
  const params = useParams();

  const { data, isLoading, error, isError } = useProductDetailsData(params.id);

  return (
    <div>
      { isLoading && <Loading /> }
      { isError && <ErrorMessage message={ error.response.data.message } /> }
      { !isLoading && data && <ProductDetailsCard product={ data } /> }
    </div>
  );
};

export default ProductsDetails;