import { ChangeEventHandler } from "react";

export interface LoginFormInterface {
  handleLogin: ChangeEventHandler<HTMLInputElement>,
  handleNavigate: (route: string) => void,
  submit: () => void,
  isError: boolean,
  isLoading: boolean,
  error: string
}
