import "./Shop.styles.scss";

import { useContext } from "react";
import { ProductContext } from "../../contexts/Productss.context";

// COMPONENTS
import ProductCard from "../../components/product-card/ProductCard.component";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
