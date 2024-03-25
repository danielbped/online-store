import styled from "styled-components";

const StyledProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 2rem;
`;

const StyledEmptyList = styled.p`
  color: #737293;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  width: 100%;
`;

export {
  StyledProductList,
  StyledEmptyList
};