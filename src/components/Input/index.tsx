import { InputProps } from "../../interfaces/components.interface";
import { StyledInput, StyledInputSection, StyledLabel } from "./style";

const Input = (props: InputProps) => {
  return (
    <StyledInputSection>
      <StyledLabel>
        { props.title }
      </StyledLabel>
      <StyledInput
        type={ props.type }
        name={ props.name }
        placeholder={ props.placeholder }
        onChange={ props.onChange }
      />
    </StyledInputSection>
  );
};

export default Input;