import { InputProps } from "../../interfaces/components.interface";

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