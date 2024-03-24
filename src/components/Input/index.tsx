import { ChangeEventHandler } from "react";

interface InputProps {
  type: string,
  name: string,
  placeholder: string,
  title: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label>{ props.title }</label>
      <input
        type={ props.type }
        name={ props.name }
        placeholder={ props.placeholder }
        onChange={ props.onChange }
      />
    </div>
  );
};

export default Input;