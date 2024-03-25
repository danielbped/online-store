import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { FavoriteResponse } from "../interfaces/favorite-data.interface";

const { VITE_API_URL } = import.meta.env;

const fetchData = async (id: string): AxiosPromise<FavoriteResponse> => {
  const token = localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1');

  const response = await axios.get<FavoriteResponse>(VITE_API_URL + `/favorite/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const useFavoriteData = (id: string) => {
  const query = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ['favorite-data'],
  });

  return {
    ...query,
    data: query.data?.data
  };
};

export default useFavoriteData;
