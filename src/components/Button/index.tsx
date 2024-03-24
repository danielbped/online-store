import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={ (e) => props.onClick(e) }>
      {props.title}
    </button>
  );
};

export default Button;