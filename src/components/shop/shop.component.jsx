import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

import {getCollectionAndDocuments} from '../../components/utils/firebase/firebase'
import { setCategories } from "../../store/category/category.action";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../routs/categories.preview";
import Category from "../routs/category/category.component";
import "./shop.styles.scss";


function ShopComponent() {
const dispatch = useDispatch()
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCollectionAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoryMap();
  }, []);

  return <Routes>
    <Route index element={<CategoriesPreview />}/>
    <Route path=":category" element={<Category />}/>

  </Routes>;
}

export default ShopComponent;
