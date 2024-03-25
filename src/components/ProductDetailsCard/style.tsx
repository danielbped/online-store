import styled from "styled-components";

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const StyledProductImage = styled.img`
  height: 15rem;

  &:hover {
    transform: scale(1.1);
    transition: all.3s ease-in-out;
  }
`;

const StyledProductTitle = styled.p`
  color: #363565;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledProductPrice = styled.p`
  color: #737293;
  font-weight: bold;
  font-size: 1.5rem;
`;

const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledVendorName = styled.span`
  color: #363565;
`;

const StyledProductPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledAvailableVariant = styled.p`
  padding: 1rem;
  border: 1px solid #363565;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #737293;
    color: white;
    transition: all.3s ease-in-out;
  }
`;

const StyleAvailableVariantDiv = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const StyledAvailableTitle = styled.p`
  color: #737293;
  font-weight: bold;
  font-size: 1.3rem;
`;

export {
  StyledProductCard,
  StyledProductImage,
  StyledProductTitle,
  StyledProductPrice,
  StyledFavoriteButton,
  StyledProductInfo,
  StyledVendorName,
  StyledProductPriceDiv,
  StyledAvailableVariant,
  StyleAvailableVariantDiv,
  StyledAvailableTitle
};