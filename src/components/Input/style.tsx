import styled from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 1.5rem;
  padding: 1rem 0.5rem;
  width: 15rem;
  border: 1px solid #737293;
  border-radius: .5rem;
  color: #737293;
`;

const StyledLabel = styled.label`
  margin-bottom: .3rem;
  color: #737293;
  font-weight: bold;
`;

const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  StyledInput,
  StyledInputSection,
  StyledLabel,
};