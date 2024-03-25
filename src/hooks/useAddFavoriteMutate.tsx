import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { CreateFavoriteData, FavoriteData } from "../interfaces/favorite-data.interface";
import { LoginResponse } from "../interfaces/login-data.interface";

const { VITE_API_URL } = import.meta.env;

const addFav = async (id: string, data: CreateFavoriteData, token: LoginResponse | null): Promise<AxiosPromise<FavoriteData> | null> => {
  if (token) {
    const response = await axios.post<FavoriteData>(`${VITE_API_URL}/favorite/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return response;
  }

  return null;
};

const useFavoriteMutate = (id: string, data: CreateFavoriteData, token: LoginResponse | null) => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: () => addFav(id, data, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorite-data'] });
    },
  });

  return mutate;
};

export default useFavoriteMutate;
