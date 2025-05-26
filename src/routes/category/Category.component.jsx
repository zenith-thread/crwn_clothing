import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";

import ProductCard from "../../components/product-card/ProductCard.component";

import { CategoriesContext } from "../../contexts/Categories.context";

import { CategoryContainer, Title } from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
