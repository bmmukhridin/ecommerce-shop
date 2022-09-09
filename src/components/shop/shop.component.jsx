import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../product.card/product.card.component";
import "./shop.styles.scss"

function ShopComponent() {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}

export default ShopComponent;
