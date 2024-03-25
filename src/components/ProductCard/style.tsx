import styled from "styled-components";

const StyledProductCard = styled.div`
  margin: 2rem;
`;

const StyledProductImage = styled.img`
  width: 15rem;
  height: 15rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all.3s ease-in-out;
  }
`;

const StyledProductTitle = styled.p`
  color: #363565;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledProductPrice = styled.p`
  color: #737293;
  font-weight: bold;
`;

const StyledProductInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledFavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: .7rem;
  color: #363565;
  font-size: 1.5rem;
  font-weight: bold;
  padding: .7em 1rem;

  &:hover {
    animation: pulse 1.5s infinite alternate;
    cursor: pointer;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export {
  StyledProductCard,
  StyledProductImage,
  StyledProductTitle,
  StyledProductPrice,
  StyledFavoriteButton,
  StyledProductInfo
};