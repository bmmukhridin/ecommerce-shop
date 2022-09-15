import React, {  useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPrewiev from "../category-preview/category-preview";
import "./shop.styles.scss";

function ShopComponent() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPrewiev key={title} title={title} products={products}/>
      })}
    </div>
  );
}

export default ShopComponent;