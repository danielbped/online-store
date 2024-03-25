import { ProductListProps } from "../../interfaces/components.interface";
import ProductCard from "../ProductCard";
import { StyledEmptyList, StyledProductList } from "./style";

const ProductList = (props: ProductListProps) => {
  const data = props.data;
  return (
    <StyledProductList>
      { !data.length && <StyledEmptyList>Nenhum produto encontrado.</StyledEmptyList> }
      { data.map(product => <ProductCard product={ product } />) }
    </StyledProductList>
  );
}

export default ProductList;