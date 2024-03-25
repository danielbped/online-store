import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImagesCarouselProps } from "../../interfaces/components.interface";
import { StyledCarouselContainer } from './style';
import { StyledProductImage } from '../ProductDetailsCard/style';

const ProductDetailsCarousel = ({ images }: ImagesCarouselProps) => {
  const handleDragStart = (e) => e.preventDefault();

  const items = images.map((image, index) => (
    <StyledProductImage key={index} src={image} onDragStart={handleDragStart} role="presentation" />
  ));

  return (
    <StyledCarouselContainer>
      <AliceCarousel
        mouseTracking
        items={ items }
        disableButtonsControls={ true }
        infinite={ true }
        autoWidth={ true }
        autoPlay={ true }
        autoPlayInterval={ 3000 }
      />
    </StyledCarouselContainer>
  );
};

export default ProductDetailsCarousel;
