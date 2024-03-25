import styled from "styled-components";

const StyledButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInputSection = styled.div`

`;

const StyledLoginForm = styled.div`

`;

const StyledRegisterCTA = styled.p`
  font-size: .7rem;
  color: #737293;
`;

const StyledRegisterLink = styled.span`
  font-weight: bold;
  color: #363565;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledLoginFormTitle = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #363565;
`;

export {
  StyledButtonSection,
  StyledInputSection,
  StyledLoginForm,
  StyledLoginFormTitle,
  StyledRegisterLink,
  StyledRegisterCTA
}