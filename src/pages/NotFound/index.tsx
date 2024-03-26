import { StyledNotFound, StyledTitle, StyledImage } from "./style"

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledTitle>Ops! A página que você está procurando não pôde ser encontrada.</StyledTitle>
      <StyledImage src="src/assets/business-pug-working-on-laptop.jpg" alt="Page not found" />
    </StyledNotFound>
  )
}

export default NotFound;
