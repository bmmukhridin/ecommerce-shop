import React,{createContext, useState, useEffect} from "react"

import { getCollectionAndDocuments } from "../components/utils/firebase/firebase.js"

//import SHOP_DATA from "../shop-data.json/shop-data.js"

export const CategoriesContext = createContext({
    CategoriesMap:[],

})

export const CategoriesProvider =({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(()=>{
        const getCategoryMap = async ()=>{
           const categoryMap = await getCollectionAndDocuments()
           console.log(categoryMap)
           setCategoriesMap(categoryMap)
        }
        getCategoryMap()
    },[])

    const value = {categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}