import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { LoginResponse } from "../interfaces/login-data.interface";

const { VITE_API_URL } = import.meta.env;

const removeFav = async (id: string, favId: string, token: LoginResponse | null): Promise<AxiosPromise<void> | null> => {
  if (token) {
    const response = await axios.delete<void>(`${VITE_API_URL}/favorite/${id}/${favId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return response;
  }

  return null;
};

const useRemoveFavoriteMutate = (id: string, favId: string, token: LoginResponse | null) => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: () => removeFav(id, favId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorite-data'] });
    }
  });

  return mutate;
};

export default useRemoveFavoriteMutate;
