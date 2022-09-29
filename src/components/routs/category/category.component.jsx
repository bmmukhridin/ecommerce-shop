import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
//import { CategoriesContext } from "../../../context/categories.context";
import {
  selectCategoriesMap,
  selectCategoriesISLoading,
} from "../../../store/category/category.selector";
import ProductCard from "../../product.card/product.card.component";
import "./category.component.scss";
import Spinner from "../../spinner/spinner";

function Category() {
  const { category } = useParams();
  //const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesISLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="categoty-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
}

export default Category;
