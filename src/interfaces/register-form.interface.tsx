import { ChangeEventHandler } from "react";

export interface RegisterFormInterface {
  handleRegister: ChangeEventHandler<HTMLInputElement>,
  handleNavigate: (route: string) => void,
  submit: () => void,
  isError: boolean,
  error: string,
  disabledButton: boolean
}
