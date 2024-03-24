import { ProductListProps } from "../../interfaces/components.interface";
import ProductCard from "../ProductCard";

const ProductList = (props: ProductListProps) => {
  return (
    <div>
      { props.data.products.map(product => <ProductCard product={ product } handleNavigate={ props.handleNavigate } />) }
    </div>
  );
}

export default ProductList;