import { MouseEventHandler } from "react";
import { ChangeEventHandler } from "react";

export interface InputProps {
  type: string,
  name: string,
  placeholder: string,
  title: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export interface ButtonProps {
  title: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean
}