import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const { VITE_API_URL } = import.meta.env;

const removeFav = async (id: string, favId: string): AxiosPromise<void> => {
  const token = localStorage.getItem('token')?.replace(/^"(.*)"$/, '$1');

  const response = await axios.delete<void>(`${VITE_API_URL}/favorite/${id}/${favId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response;
};

const useRemoveFavoriteMutate = (id: string, favId: string) => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: () => removeFav(id, favId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorite-data'] });
    }
  });

  return mutate;
};

export default useRemoveFavoriteMutate;
