import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
//import { CategoriesContext } from "../../../context/categories.context";
import { selectCategoriesMap } from "../../../store/category/category.selector";
import ProductCard from "../../product.card/product.card.component";
import "./category.component.scss";

function Category() {
  const { category } = useParams();
  //const { categoriesMap } = useContext(CategoriesContext);
  const  categoriesMap  = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="categoty-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Category;
