import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../routs/categories.preview";
import Category from "../routs/category/category.component";
import "./shop.styles.scss";

function ShopComponent() {
  return <Routes>
    <Route index element={<CategoriesPreview />}/>
    <Route path=":category" element={<Category />}/>

  </Routes>;
}

export default ShopComponent;
