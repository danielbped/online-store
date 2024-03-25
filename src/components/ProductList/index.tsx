import { ProductListProps } from "../../interfaces/components.interface";
import ProductCard from "../ProductCard";

const ProductList = (props: ProductListProps) => {
  const data = props.data;
  return (
    <div>
      { !data.length && <p>Nenhum produto encontrado</p> }
      { data.map(product => <ProductCard product={ product } />) }
    </div>
  );
}

export default ProductList;