import { ErrorMessageProps } from "../../interfaces/components.interface";

const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <p>{ props.message }</p>
  );
};

export default ErrorMessage;