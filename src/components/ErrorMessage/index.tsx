import { ErrorMessageProps } from "../../interfaces/components.interface";
import { StyledErrorMessage } from "./style";

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <StyledErrorMessage>{ props.message }</StyledErrorMessage>
  );
};

export default ErrorMessage;