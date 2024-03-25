import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { CreateFavoriteData, FavoriteData } from "../interfaces/favorite-data.interface";

const { VITE_API_URL } = import.meta.env;

const addFav = async (id: string, data: CreateFavoriteData): AxiosPromise<FavoriteData> => {
  const token = localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1');

  const response = await axios.post<FavoriteData>(`${VITE_API_URL}/favorite/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response;
};

const useFavoriteMutate = (id: string, data: CreateFavoriteData) => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: () => addFav(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorite-data'] });
    },
  });

  return mutate;
};

export default useFavoriteMutate;
