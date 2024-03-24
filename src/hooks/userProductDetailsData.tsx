import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductDetailResponse } from "../interfaces/product-data.interface";

const { VITE_API_URL } = import.meta.env;

const fetchData = async (id: string): AxiosPromise<ProductDetailResponse> => {
  const response = await axios.get<ProductDetailResponse>(`${VITE_API_URL}/product/${id}`);
  return response;
};

const useProductDetailsData = (id: string) => {
  const query = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ['product-detail-data'],
    retry: false
  });

  return {
    ...query,
    data: query.data?.data
  };
};

export default useProductDetailsData;
