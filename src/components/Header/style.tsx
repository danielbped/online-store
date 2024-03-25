import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #363565;
  margin-bottom: 1rem;
`;

const StyledHeaderButton = styled.button`
  border: none;
  background-color: #737293;
  font-weight: bold;
  color: white;
  padding: .7em 1rem;
  border-radius: .7rem;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #737293;
    transition: all.3s ease-in-out;
  }
`;

const StyledHeaderTitle = styled.p`
  font-weight: bold;
  color: white;
  text-align: center;
  cursor: pointer;
`;

const StyledIconButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  color: white;
  padding: .7em 1rem;
  border-radius: .7rem;
  font-size: 1.5rem;
  margin-left: 2rem;

  &:hover {
    cursor: pointer;
    animation: pulse 1.5s infinite alternate;
  }
`;

const StyledButtonSection = styled.div`
  display: flex;
  align-items: center;
`;

export {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderTitle,
  StyledIconButton,
  StyledButtonSection
};
