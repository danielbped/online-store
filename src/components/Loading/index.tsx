import { PulseLoader } from "react-spinners";
import { StyledLoading } from "./style";

const Loading = () => {
  return (
    <StyledLoading>
      <PulseLoader color="#737293" />
    </StyledLoading>
  );
};

export default Loading;