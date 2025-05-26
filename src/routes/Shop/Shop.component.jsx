import { Routes, Route } from "react-router";

import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import Category from "../category/Category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
