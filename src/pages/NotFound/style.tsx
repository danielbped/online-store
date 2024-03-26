import styled from "styled-components";

const StyledNotFound = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const StyledImage = styled.img`
  width: 50rem;
`;

export {
  StyledNotFound,
  StyledTitle,
  StyledImage
};