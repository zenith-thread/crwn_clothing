import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";

import ProductCard from "../../components/product-card/ProductCard.component";

// REDUX
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import { CategoryContainer, Title } from "./Category.styles";

const Category = () => {
  const { category } = useParams();

  // REDUX
  const categoriesMap = useSelector(selectCategoriesMap);

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
