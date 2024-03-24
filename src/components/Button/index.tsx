import { ButtonProps } from "../../interfaces/components.interface";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={ (e) => props.onClick(e) }
      disabled={ props.disabled }
    >
      {props.title}
    </button>
  );
};

export default Button;