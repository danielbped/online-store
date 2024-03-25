import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { FavoriteResponse } from "../interfaces/favorite-data.interface";
import { LoginResponse } from "../interfaces/login-data.interface";

const { VITE_API_URL } = import.meta.env;

const fetchData = async (id: string, token: LoginResponse | null): Promise<AxiosResponse<FavoriteResponse> | null> => {
  if (token) {
    const response = await axios.get<FavoriteResponse>(VITE_API_URL + `/favorite/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } else {
    return null;
  }
};

const useFavoriteData = (id: string, token: LoginResponse | null) => {
  const query = useQuery<AxiosResponse<FavoriteResponse> | null, Error>({
    queryKey: ['favorite-data'],
    queryFn: () => fetchData(id, token),
  });

  return {
    ...query,
    data: query.data?.data
  };
};

export default useFavoriteData;
