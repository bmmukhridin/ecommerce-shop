import React, {  useContext } from "react";
import { Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPrewiev from "../category-preview/category-preview";


function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPrewiev key={title} title={title} products={products}/>
      })}
    </Fragment>
  );
}

export default CategoriesPreview;