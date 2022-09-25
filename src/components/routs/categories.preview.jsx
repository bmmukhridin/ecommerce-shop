import React,{ Fragment } from "react";
import { selectCategoriesMap } from "../../store/category/category.selector";

import {useSelector} from "react-redux";
//import { CategoriesContext } from "../../context/categories.context";
import CategoryPrewiev from "../category-preview/category-preview";


function CategoriesPreview() {
  //const { categoriesMap } = useContext(CategoriesContext);
const categoriesMap = useSelector(selectCategoriesMap)
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