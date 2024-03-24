import { useMutation } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { LoginData, LoginResponse } from "../components/interfaces/login-data";

const { VITE_API_URL } = import.meta.env;

const login = async (data: LoginData): AxiosPromise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(VITE_API_URL + '/login', data)
  return response;
};

const useLoginMutate = () => {
  const mutate = useMutation({
    mutationFn: login,
  });

  return mutate;
};

export default useLoginMutate;
