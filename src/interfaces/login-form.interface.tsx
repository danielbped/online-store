import { ChangeEventHandler } from "react";

export interface LoginFormInterface {
  handleLogin: ChangeEventHandler<HTMLInputElement>
  submit: () => void,
  isError: boolean,
  error: string
}
