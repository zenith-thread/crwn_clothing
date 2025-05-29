import { useEffect } from "react";

import { Routes, Route } from "react-router";

// REDUX
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesASync } from "../../store/categories/category.action";

import CategoriesPreview from "../categories-preview/CategoriesPreview.component";
import Category from "../category/Category.component";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesASync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
