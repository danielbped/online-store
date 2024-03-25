import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 1rem;
  color: #363565;
  baground-color: #363565;
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  width: 100%;
  
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #737293;
    transition: all.3s ease-in-out;
  }
`;

export {
  StyledButton,
};